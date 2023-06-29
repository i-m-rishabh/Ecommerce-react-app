import { useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    function handleFetchMovie(){

        fetch("https://swapi.dev/api/films").then(
            (response)=>{
                return response.json();
            }
        ).then((data)=>{
            const fetchedMovies = data.results.map((movie)=>{
                return {
                    title:movie.title,
                    id:movie.episode_id,
                    desc:movie.opening_crawl,
                }
            })
            // console.log(movies);
            setMovies(fetchedMovies);
        })
    }
    return <div style={{minHeight:"100vh"}}>
        <Header onCartOpen={()=>{}} cartActive={false}/>
        <Content />
        <Container className="my-3 d-flex flex-column justify-content-center align-items-center">
            <Button onClick={handleFetchMovie}>Fetch Movies</Button>
            <ListGroup className="my-2">
                {
                    movies.map((movie)=>{
                        return <>
                        <ListGroup.Item className="">
                        <h3 className="text-center">{movie.title}</h3>
                        <p className="">{movie.desc}</p>
                </ListGroup.Item>
                        </>
                    })
                }
            </ListGroup>
        </Container>
            <Footer />
    </div>
}

export default Movies;