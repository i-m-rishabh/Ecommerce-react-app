import { useRef, useState } from "react";
import { Button, ButtonGroup, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { json } from "react-router-dom";

const SignUp = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [isSendingRequest, setSendingRequest] = useState(false);

    function signupHandler(event){
        event.preventDefault();
        setSendingRequest(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(!email || !password){
            setErrorMsg('All fields must be filled.');
            return;
        }
        // console.log(email,password);
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZVCrVMuv-INaVNKdv2lcT9r37VjrQ3BY",
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
            // console.log(res);
            if(res.ok){
                setSuccessMsg("Congratulations! You have successfully signed up.")                
                res.json().then(data=>{
                    // console.log(data);
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
        setSuccessMsg("");
        setSendingRequest(false);
    }
    return(
        <Container className="d-flex flex-column align-items-center my-3">
            <h2 className="m-3">SignUp</h2>
            <Form onSubmit={signupHandler}>
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
                    <Button type="submit" className="mx-auto">sign up</Button>
                    }
                </ButtonGroup>
            </Form>
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
            {successMsg && <p className="text-success">{successMsg}</p>}
            <Link to={'/login'}>Login with existing account</Link>
        </Container>
    )
}

export default SignUp;