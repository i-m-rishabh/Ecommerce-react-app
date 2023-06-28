import { Container, Image } from "react-bootstrap";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";


const About = () => {
    return <>
        <Header onCartOpen={()=>{}} cartActive={false}/>
        <Content />
        <Container className="row">
            <Container className="col-4 m-3">
                <Image src="" className="w-100 rounded-circle"/>
            </Container>
            <Container className="col m-3">
                <p>Welcome to Generic!<br/>
                    At Generic, we strive to provide an exceptional online shopping experience for all your needs. With a wide range of products and a user-friendly interface, we aim to make your shopping journey convenient and enjoyable.
                    Our dedicated team works tirelessly to curate a diverse selection of high-quality products, including electronics, fashion, home goods, beauty, and much more. We partner with trusted suppliers to ensure that every item meets our strict standards of quality and affordability.
                    Customer satisfaction is our top priority. We offer secure payment options, fast shipping, and hassle-free returns to ensure that you can shop with confidence. Our friendly customer support team is always ready to assist you with any queries or concerns you may have.
                    At Generic, we believe in building long-lasting relationships with our customers. We continuously improve our services and strive to exceed your expectations. We value your feedback and suggestions to help us enhance your shopping experience.
                    Thank you for choosing Generic as your trusted online shopping destination. We look forward to serving you and providing you with an exceptional shopping experience.
                    <br/>Happy shopping!
                </p>
            </Container>
        </Container>
        <Footer />
    </>
}

export default About;