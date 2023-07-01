import { Button, ButtonGroup, Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRef } from "react";


const Contact = () => {
    const name = useRef(null)
    const email = useRef(null)
    const phone = useRef(null)

    function handleSubmit(event){
        event.preventDefault();
        const userData = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value
        }
        // console.log(userData);
        fetch("https://react-ecommerce-af4e6-default-rtdb.firebaseio.com/clientsData.json",{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res);
            name.current.value='';
            email.current.value='';
            phone.current.value='';
        })
    }
    return <div style={{minHeight:"100vh"}}>
        <Header onCartOpen={()=>{}} cartActive={false}/>
        <Content />
        <Container className="d-flex flex-column bg-secondary col-6 mx-auto my-3 text-white">
        <h3 className="display-4 text-center">Contact Us</h3>
        <Form className="m-auto" onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl type="text" ref={name}/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl type="email" ref={email}/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Phone</FormLabel>
                <FormControl type="phone" ref={phone}/>
            </FormGroup>
            <ButtonGroup className="d-flex justify-content-center m-3">
                <Button type="submit" className="">Submit</Button>
            </ButtonGroup>
        </Form>
        </Container>
        <Footer />
    </div>
}

export default Contact;