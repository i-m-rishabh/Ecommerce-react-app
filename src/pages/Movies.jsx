import { useCallback, useEffect, useMemo, useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Container, Form, FormGroup, FormLabel, FormControl, ListGroup, Spinner } from "react-bootstrap";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retrying, setRetrying] = useState(false);
    const [retry, setRety] = useState(0);

    const handleFetchMovie = useCallback(async () => {
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

    },[]);
    useEffect(()=>{
        const data = localStorage.getItem('data');
        if(data){
            setMovies(JSON.parse(data));
        }else{
            handleFetchMovie();
        }
    },[handleFetchMovie]);
    
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

    function handleAddMovie(event){
        event.preventDefault();
        const title = event.target.movieTitle.value;
        const desc = event.target.movieDesc.value;
        setMovies((prev)=>{
            const updatedMovies =  [...prev, {
                id: Math.random(),
                title: title,
                desc: desc,
            }];
            localStorage.setItem('data',JSON.stringify(updatedMovies));
            return updatedMovies;
        })
        event.target.movieTitle.value = '';
        event.target.movieDesc.value = '';
    }

    return <div style={{minHeight:"100vh"}}>
        <Header onCartOpen={()=>{}} cartActive={false}/>
        <Content />
         <div>
            <h3 className="text-center my-3">Add Movie</h3>
            <Container className="text-center my-3 p-3 bg-dark text-primary w-50">
            <Form onSubmit={handleAddMovie}>
                <FormGroup>
                    <FormLabel>Movie Title</FormLabel>
                    <FormControl type="text" placeholder="Enter your name" name="movieTitle"/>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Opening text</FormLabel>
                    <FormControl as="textarea" placeholder="Enter here" rows={3} name="movieDesc" />
                </FormGroup>

                <Button className="my-2" type="submit">Add Movie</Button>
            </Form>
            </Container>
         </div>
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