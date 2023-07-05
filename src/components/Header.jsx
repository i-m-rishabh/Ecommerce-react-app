import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {BiStore} from 'react-icons/bi'
import CartContext from '../cartContext/CartContext';
import { UserContext } from '../Auth/userContext/UserContext';

const Header = ({onCartOpen, cartActive}) => {
    const userCtx = useContext(UserContext);
    
    const cartCtx = useContext(CartContext);
    const noOfItems = cartCtx.noOfCartItems()
    const navigate = useNavigate();

    function handleLogout(){
      userCtx.userLoggedOut();
      navigate('/login');
    }

    return <>
        <Navbar bg="dark" data-bs-theme="dark" className='position-fixed w-100 z-1'>
        <Container>
          <Navbar.Brand href="#home"><BiStore className='display-5'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          {cartActive && <Button onClick={()=>{onCartOpen()}}>Cart {noOfItems}</Button>}
          <Button className='btn btn-sm btn-danger ms-5' onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>
    </>
}

export default Header;