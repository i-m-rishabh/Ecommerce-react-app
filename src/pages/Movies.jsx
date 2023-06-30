import { useCallback, useEffect, useMemo, useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Container, ListGroup, Spinner } from "react-bootstrap";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retrying, setRetrying] = useState(false);
    const [retry, setRety] = useState(0);
    useEffect(()=>{
        const data = localStorage.getItem('data');
        if(data){
            setMovies(JSON.parse(data));
        }else{
            handleFetchMovie();
        }
    },[])
    useEffect(()=>{
        let  timer;
        setRety(0);
        if(retrying){
         timer = setInterval(() => {
                setRety((prev)=>{return prev+1});
                handleFetchMovie();
            }, 3000);
        }
        return ()=>{clearInterval(timer)}
    },[retrying])

     async function handleFetchMovie(){
        setIsLoading(true);
        try{
        const response = await fetch("https://swapi.dev/api/films");
        if(!response.ok){
            setRetrying(true);
            throw new Error("Something went wrong.");
        }else{
            setRetrying(false);
        }
        const data = await response.json();
 
        const fetchedMovies = data.results.map((movie)=>{
                return {
                    title:movie.title,
                    id:movie.episode_id,
                    desc:movie.opening_crawl,
                }
            })
            setMovies(fetchedMovies);
            localStorage.setItem('data',JSON.stringify(fetchedMovies));
            
        }catch(error){
            setError(error.message);
        }
        setIsLoading(false);

    }

    return <div style={{minHeight:"100vh"}}>
        <Header onCartOpen={()=>{}} cartActive={false}/>
        <Content />
        <Container className="my-3 d-flex flex-column justify-content-center align-items-center" style={{minHeight:"50vh"}}>
            <Button onClick={handleFetchMovie}>Fetch Movies</Button>
            {error && <p>{error}</p>}
            {retrying && <><p>{`retrying(${retry})...`}</p> <Button onClick={()=>{setRetrying(false)}}>cancel</Button> </>}
            {isLoading && !error && <Spinner animation="border" role="status" variant="primary" size="lg" className="m-3"/>}
            <ListGroup className="my-2">
                {
                    movies.map((movie)=>{
                        return <div key={movie.id}>
                                    <ListGroup.Item className="">
                                    <h3 className="text-center">{movie.title}</h3>
                                    <p className="">{movie.desc}</p>
                                    </ListGroup.Item>
                                </div>
                    })
                }
            </ListGroup>
        </Container>
            <Footer />
    </div>
}

export default Movies;