import { useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Container, ListGroup, Spinner } from "react-bootstrap";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function handleFetchMovie(){
        setIsLoading(true);
        try{
        const response = await fetch("https://swapi.dev/api/films");
        const data = await response.json();
 
        const fetchedMovies = data.results.map((movie)=>{
                return {
                    title:movie.title,
                    id:movie.episode_id,
                    desc:movie.opening_crawl,
                }
            })
            // console.log(movies);
            setMovies(fetchedMovies);
            setIsLoading(false);
        }catch(err){
            console.log(err);
        }
    }

    return <div style={{minHeight:"100vh"}}>
        <Header onCartOpen={()=>{}} cartActive={false}/>
        <Content />
        <Container className="my-3 d-flex flex-column justify-content-center align-items-center" style={{minHeight:"50vh"}}>
            <Button onClick={handleFetchMovie}>Fetch Movies</Button>
            {isLoading && <Spinner animation="border" role="status" variant="primary" size="lg" className="m-3"/>}
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