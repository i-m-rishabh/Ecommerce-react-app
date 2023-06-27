
import { Button } from 'react-bootstrap';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <Content />
      <Section />
      <Button className='btn-lg mx-auto my-3'>See The Cart</Button>
      <Footer />
    </div>
  );
}

export default App;
