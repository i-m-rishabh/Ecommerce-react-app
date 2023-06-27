import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BiStore} from 'react-icons/bi'
const Header = ({onCartOpen}) => {
    const noOfItems = 0;
    return <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><BiStore className='display-5'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Button onClick={()=>{onCartOpen()}}>Cart {noOfItems}</Button>
        </Container>
      </Navbar>
    </>
}

export default Header;