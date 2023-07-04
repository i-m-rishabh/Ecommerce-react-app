import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Movies from '../pages/Movies';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';
import SignUp from '../Auth/SignUp';
import Login from '../Auth/Login';
import UpdatePassword from '../Auth/UpdatePassword';

    // router setup
    export const Router = createBrowserRouter([
        // {path: '/', element: <App />},
        {path: '/', element: <Login />},
        {path: '/products/:productTitle', element: <ProductDetails/>},
        {path: '/home', element: <Home />},
        {path: '/about', element: <About />},
        {path: '/movies', element: <Movies />},
        {path: '/contact', element: <Contact />},
        {path: '/signup', element: <SignUp/>},
        {path: '/login', element: <Login/>},
        {path: '/update-password', element: <UpdatePassword/>},
    ]);