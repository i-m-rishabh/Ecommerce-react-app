import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Movies from '../pages/Movies';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';
import Login from '../Auth/Login';
import UpdatePassword from '../Auth/UpdatePassword';
import PrivateRoute from './PrivateRoute';
import PreventRoute from './PreventRoute';
import SignUp from '../Auth/SignUp';
    // router setup
    export const Router = createBrowserRouter([
        // {path: '/', element: <App />},
        {path: '/', element: <Navigate to={'/home'}/>},
        {path: '/store', element: <PrivateRoute element={<App />}/>},
        {path: '/products/:productTitle', element: <PrivateRoute element={<ProductDetails />}/>},
        {path: '/home', element: <PrivateRoute element={<Home />}/>},
        {path: '/about', element: <PrivateRoute element={<About />}/>},
        {path: '/movies', element: <PrivateRoute element={<Movies />}/>},
        {path: '/contact', element: <PrivateRoute element={<Contact />}/>},
        {path: '/signup', element: <PreventRoute element={<SignUp/>}/>},
        {path: '/login', element: <PreventRoute element={<Login/>}/>},
        {path: '/update-password', element: <PrivateRoute element={<UpdatePassword />}/>},
        {path: '*', element: <Navigate to={"/home"}/>},

    ]);