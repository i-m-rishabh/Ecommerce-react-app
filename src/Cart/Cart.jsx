
import React from 'react';
import { Card, ListGroup, Button} from 'react-bootstrap';
import { cartElements } from '../Data/CartData';
import './cart.css';

const Cart = () => {

  return (
    <div className='scrollable-container'>
    <Card className="bg-secondary shadow-lg">
      <Card.Header className='display-5'>Cart</Card.Header>
      <ListGroup variant="flush" className='bg-secondary'>
        {cartElements.map((item) => (
          <ListGroup.Item key={item.title}>
            <div className="cart-item  row d-flex  align-items-center">
              <div className="cart-item-details col-3">
                <img src={item.imageUrl} alt={item.title} className="cart-item-image" style={{width:100}} />
                <h6>{item.title}</h6>
                <p>Price: {item.price}</p>
              </div>
              <div className='display-5 col-2'>x{item.quantity}</div>
              <Button variant="danger m-auto p-auto col-2" >Remove</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer className='text-center'>
        <Button variant="primary">Proceed to Checkout</Button>
      </Card.Footer>
    </Card>
    </div>
  );
};

export default Cart;
