import { useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    async function handleFetchMovie(){
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
        }catch(err){
            console.log(err);
        }
    }

    return <div style={{minHeight:"100vh"}}>
        <Header onCartOpen={()=>{}} cartActive={false}/>
        <Content />
        <Container className="my-3 d-flex flex-column justify-content-center align-items-center">
            <Button onClick={handleFetchMovie}>Fetch Movies</Button>
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