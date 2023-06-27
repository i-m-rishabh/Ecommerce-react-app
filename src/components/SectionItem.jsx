import {Container, Button, Image } from "react-bootstrap";
// import classes from './sectionItem.module.css';
import './sectionItem.css';

const SectionItem = ({product}) => {

    return <div className="m-5 d-flex flex-column col-lg-4 justify-content-center align-items-center">
        <h3 className="text-center">{product.title}</h3>
        <div className="">
            {/* <img src={product.imageUrl} className=""/> */}
            <Container >
                <Image src={product.imageUrl} className= "img image-with-hover-effect border" />
            </Container>
        </div>
        <div className="d-flex mt-2 justify-content-between">
            <h4 className="mx-5">${product.price}</h4>
            <Button className="mx-5">ADD TO CART</Button>
        </div>
        
    </div>
}

export default SectionItem;