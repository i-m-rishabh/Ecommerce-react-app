import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Movies from '../pages/Movies';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';

    // router setup
    export const Router = createBrowserRouter([
        // {path: '/', element: <App />},
        {path: '/', element: <App />},
        {path: '/products/:productTitle', element: <ProductDetails/>},
        {path: '/home', element: <Home />},
        {path: '/about', element: <About />},
        {path: '/movies', element: <Movies />},
        {path: '/contact', element: <Contact />}
    ]);