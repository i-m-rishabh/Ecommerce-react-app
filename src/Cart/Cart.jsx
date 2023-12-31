
import React, { useContext } from 'react';
import { Card, ListGroup, Button, CloseButton} from 'react-bootstrap';
// import { cartElements } from '../Data/CartData';
import './cart.css';
import CartContext from '../cartContext/CartContext';
const Cart = ({onCartClose}) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className='scrollable-container'>
    <Card className="bg-secondary shadow-lg">
      <Card.Header className='display-6 d-flex justify-content-between'>
        <h1>Cart</h1>
        <CloseButton onClick={()=>{onCartClose()}}></CloseButton>
      </Card.Header>
      <ListGroup variant="flush" className='bg-secondary'>
        {cartCtx.cartItems.map((item) => (
          <ListGroup.Item key={item.title}>
            <div className="cart-item  row d-flex  align-items-center">
              <div className="cart-item-details col-3">
                <img src={item.imageUrl} alt={item.title} className="cart-item-image" style={{width:100}} />
                <h6>{item.title}</h6>
                <p>Price: {item.price}</p>
              </div>
              <div className='display-5 col-2'>x{item.quantity}</div>
              <Button variant="danger m-auto p-auto col-2" onClick={()=>{cartCtx.removeFromCart(item)}}>Remove</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer className='text-center'>
        <h3>Total Amount ${cartCtx.totalAmount()}</h3>
        <Button variant="primary">Proceed to Checkout</Button>
      </Card.Footer>
    </Card>
    </div>
  );
};

export default Cart;
