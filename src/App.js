
import { Button } from 'react-bootstrap';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Cart from './Cart/Cart';
import { useState } from 'react';


function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  function onCartClose(){
    setCartOpen(false);
  }
  function onCartOpen(){
    setCartOpen(true);
  }
  return (
    <div className="App d-flex flex-column">
      <Header onCartOpen={onCartOpen}/>
      <Content />
      <Section />
      <Button className='btn-lg mx-auto my-3' onClick={()=>{onCartOpen()}}>See The Cart</Button>
      <Footer />
      {isCartOpen && <Cart onCartClose={onCartClose}/>}
    </div>
  );
}

export default App;
