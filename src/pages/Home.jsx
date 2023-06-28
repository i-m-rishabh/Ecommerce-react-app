import { Button, Container} from "react-bootstrap";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { ListGroup } from "react-bootstrap";

const Home = () => {
    return <>
        <Header onCartOpen={()=>{}} cartActive={false}/>
        <Content />
        <div className=" bg-secondary vw-100 d-flex flex-column justify-content-center align-items-center">
            <h2 className="p-2 m-2 text-white">Get Our Latest Album</h2>
            <IconContext.Provider value={{color:'white', size:'50px'}}>
                <div className="mb-3"><BsFillPlayCircleFill /></div>
            </IconContext.Provider>
        </div>
        <Container className="text-center m-3">
            <h3>Tours</h3>
            <ListGroup className="">
                <ListGroup.Item className="row d-flex">
                    <div className="col-3">JAN07</div>
                    <div className="col-3">DETROIT,MI</div>
                    <div className="col-3">DTE ENERGY MUSIC THEATRE</div>
                    <Button className="col-2 btn-sm btn-primary"> buy tickets </Button>
                </ListGroup.Item>
                <ListGroup.Item className="row d-flex">
                    <div className="col-3">JAN23</div>
                    <div className="col-3">TORONTO,ON</div>
                    <div className="col-3">BUDWEISER STAGE</div>
                    <Button className="col-2 btn-sm btn-primary"> buy tickets </Button>
                </ListGroup.Item>
                <ListGroup.Item className="row d-flex">
                    <div className="col-3">FEB03</div>
                    <div className="col-3">BRISTOW,VA</div>
                    <div className="col-3">JIGGY LUBE LIVE</div>
                    <Button className="col-2 btn-sm btn-primary"> buy tickets </Button>
                </ListGroup.Item>
                <ListGroup.Item className="row d-flex">
                    <div className="col-3">FEB12</div>
                    <div className="col-3">PHOENIX,AZ</div>
                    <div className="col-3">AK-CHIN PAVILION</div>
                    <Button className="col-2 btn-sm btn-primary"> buy tickets </Button>
                </ListGroup.Item><ListGroup.Item className="row d-flex">
                    <div className="col-3">MAR08</div>
                    <div className="col-3">LAS VEGAS,NV</div>
                    <div className="col-3">T-MOBILE ARENA</div>
                    <Button className="col-2 btn-sm btn-primary"> buy tickets </Button>
                </ListGroup.Item>
                <ListGroup.Item className="row d-flex">
                    <div className="col-3">MAR28</div>
                    <div className="col-3">CONCORD,CA</div>
                    <div className="col-3">CONCORD PAVILION</div>
                    <Button className="col-2 btn-sm btn-primary"> buy tickets </Button>
                </ListGroup.Item>
                
                {/* <ListGroup.Item className="col">Item 2</ListGroup.Item> */}
                {/* <ListGroup.Item className="col">Item 3</ListGroup.Item> */}
            </ListGroup>
        </Container>
        <Footer />
    </>
}

export default Home;