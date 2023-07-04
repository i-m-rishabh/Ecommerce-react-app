import { useContext, useRef, useState } from "react";
import { Button, ButtonGroup, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./userContext/UserContext";
import CartContext from "../cartContext/CartContext";

const Login = () => {
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [isSendingRequest, setSendingRequest] = useState(false);
    const cartCtx = useContext(CartContext);
    

    function loginHandler(event){
        event.preventDefault();
        setSendingRequest(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(!email || !password){
            setErrorMsg('All fields must be filled.');
            setSendingRequest(false);
            return;
        }
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZVCrVMuv-INaVNKdv2lcT9r37VjrQ3BY",
        {
            method:'POST',
            body:JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            }),
            headers:{
                'Content-Type':'application/json',
            }
        }
        ).then(res=>{
            setSendingRequest(false);
            if(res.ok){
                console.log("response is ok");
                res.json().then(data=>{
                    console.log(data);
                    userCtx.userLoggedIn(data.email, data.idToken, data.localId);
                    fetch(`https://react-ecommerce-af4e6-default-rtdb.firebaseio.com/users/${userCtx.localId}.json`).then(res=>{
                        if(res.ok){
                            let userCart;
                            console.log("user cart fetched successfully");
                            res.json().then(data=>{
                                for(let key in data){
                                    userCart = data[key].cart;
                                }
                                console.log(userCart);
                                if(userCart===undefined){
                                    userCart = [];
                                }
                                cartCtx.setCart(userCart);
                            })
                        }else{

                        }
                    }).catch(err=>{console.log(err)});
                    navigate('/home');
                })
            }else{
                console.log('response not OK');
                res.json().then(data=>{
                    // console.log(data.error.message);
                    setErrorMsg(data.error.message);
                })
            }
        })
    }
    function handleFormInputChange(){
        setErrorMsg("");
        setSendingRequest(false);
    }
    return(
        <Container className="d-flex flex-column align-items-center my-3">
            <h2 className="m-3">Login</h2>
            <Form onSubmit={loginHandler}>
                <FormGroup>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl type="email" ref={emailRef} onChange={handleFormInputChange}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Your Password</FormLabel>
                    <FormControl type="password" ref={passwordRef} onChange={handleFormInputChange}/>
                </FormGroup>
                <ButtonGroup className="d-flex justify-content-center align-items-center my-2 ">
                    {isSendingRequest ? 
                    <p>sending request...</p>
                    :
                    <Button type="submit" className="mx-auto">Login</Button>
                    }
                </ButtonGroup>
            </Form>
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
            <Link to={'/signup'}>Don't have a account. Sign up</Link>
        </Container>
    )
}

export default Login;