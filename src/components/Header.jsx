import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BiStore} from 'react-icons/bi'
import CartContext from '../cartContext/CartContext';

const Header = ({onCartOpen}) => {
    const cartCtx = useContext(CartContext);
    const noOfItems = cartCtx.noOfCartItems()

    return <>
        <Navbar bg="dark" data-bs-theme="dark" className='position-fixed w-100 z-1'>
        <Container>
          <Navbar.Brand href="#home"><BiStore className='display-5'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Button onClick={()=>{onCartOpen()}}>Cart {noOfItems}</Button>
        </Container>
      </Navbar>
    </>
}

export default Header;