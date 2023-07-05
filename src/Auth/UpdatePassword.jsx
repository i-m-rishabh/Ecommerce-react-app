import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Header from "../components/Header";
import { useContext, useRef, useState } from "react";
import { UserContext } from "./userContext/UserContext";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
    const navigate = useNavigate();
    const newPasswordRef = useRef(null);
    const [sendingRequest, setSendingRequest] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const userCtx = useContext(UserContext);

    function updatePasswordHandler(event){
        event.preventDefault();
        setSendingRequest(true);
        const newPassword = newPasswordRef.current.value;
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDZVCrVMuv-INaVNKdv2lcT9r37VjrQ3BY",{
            method:"POST",
            body:JSON.stringify({
                password:newPassword,
                idToken:userCtx.idToken,
                returnSecureToken: true,
            }),
            headers:{
                'Content-Type':"application/json"
            }
        }).then(res=>{
            setSendingRequest(false);
            if(res.ok){
                res.json().then(data=>{
                    console.log("response is OK");
                    alert("password updated");
                    navigate('/home');
                    // console.log(data);
                })
            }else{
                console.log("response not OK");
                // console.log(userCtx.idToken);
                res.json().then(data=>{
                    console.log(data);
                    setErrorMsg(data.error.message);
                })
            }
        }).catch(error=>{
            console.log(error);
        });
    }
    return(
        <>
        <Header />
        <div className=" d-flex flex-column justify-content-center align-items-center">
            <h2 className="m-3">Update Password</h2>
            <Form className="bg-secondary text-white m-3 p-5 " onSubmit={updatePasswordHandler}>
                <FormGroup>
                    <FormLabel>New Password</FormLabel>
                    <FormControl type="password" ref={newPasswordRef}/>
                </FormGroup>
                {!sendingRequest && <Button className="btn btn-sm my-3" type="submit">change password</Button>}
                {sendingRequest && <p className=" my-3 text-primary">sending request...</p>}
            </Form>
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
        </div>
        </>
    )
}
export default UpdatePassword;