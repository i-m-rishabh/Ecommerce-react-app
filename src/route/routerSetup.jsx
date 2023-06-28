import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';

    // router setup
    export const Router = createBrowserRouter([
        // {path: '/', element: <App />},
        {path: '/', element: <App />},
        {path: '/home', element: <Home />},
        {path: '/about', element: <About />},
    ]);