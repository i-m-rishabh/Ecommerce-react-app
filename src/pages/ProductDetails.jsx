import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productsArr } from "../Data/ItemData";

const ProductDetails = () => {
    const {productTitle} = useParams();
    const product = productsArr.find((product) => productTitle === product.title)
    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2>{productTitle}</h2>
        <div>
            <h2 className="text-center">Product Images</h2>
            <div className="d-flex row justify-content-space-around">
                <Image src={product.imageUrl} className="col-3" placeholder="product-image"/>
                <Image src={product.imageUrl} className="col-3" placeholder="product-image"/>
                <Image src={product.imageUrl} className="col-3" placeholder="product-image"/>
                <Image src={product.imageUrl} className="col-3" placeholder="product-image"/>
            </div>
            <div>
                <h2>Product details</h2>
                <div>
                    <p>${product.price}</p>
                    <p>product details product details product details</p>
                    <p>product details product details product details</p>
                    <p>product details product details product details</p>
                </div>
            </div>
            <div>
               <h2>Product Reviews</h2>
               <div>
                <p>review 1</p>
                <p>review 2</p>
                <p>review 3</p>
                <p>review 4</p>
               </div> 
            </div>
        </div>
        </div>
    )
}

export default ProductDetails;