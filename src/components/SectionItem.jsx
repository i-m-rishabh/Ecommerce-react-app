import {Container, Button, Image } from "react-bootstrap";
import './sectionItem.css';
import { useContext } from "react";
import CartContext from "../cartContext/CartContext";
import { Link } from "react-router-dom";

const SectionItem = ({product}) => {
    const cartCtx = useContext(CartContext);
    return <div className="m-5 d-flex flex-column col-lg-4 justify-content-center align-items-center">
        <h3 className="text-center">{product.title}</h3>
        <div className="">
            <Container >
              <Link to={`/products/${product.title}`}>  <Image src={product.imageUrl} className= "img image-with-hover-effect border" /></Link>
            </Container>
        </div>
        <div className="d-flex mt-2 justify-content-between">
            <h4 className="mx-5">${product.price}</h4>
            <Button className="mx-5" onClick={()=>{cartCtx.addToCart(product)}}>ADD TO CART</Button>
        </div>
        
    </div>
}

export default SectionItem;