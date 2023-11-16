import "../Design/login.css";
import { useNavigate } from "react-router-dom";
import { useRef, useContext, useState } from 'react';
import { loginCall } from "./../apiCalls"
import { AuthContext } from './../context/AuthContext';


export default function Login() {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    
    const {isFetching, dispatch} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState();

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value},
            dispatch).then((error) => {

                setErrorMessage("Invalid credentials! Please try again.")
            })
    }
    const handleRegisterRedirect = (e) => {
        navigate('/register')
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Cricbuzz Clone</h3>
                    <span className="loginDesc">Do check your typing speed and improve it by consistent practice...</span>
                </div>
                <div className="loginRight">
                    <form className="loginRightBox" onSubmit={handleClick}>
                        <input
                            placeholder="Email" 
                            type="email" 
                            required="true"
                            className="loginInput" 
                            ref={email}
                        />
                        <input
                             placeholder="Password" 
                             type="password" 
                             required="true"
                             minLength="6"
                             className="loginInput"
                             ref={password} 
                        />
                        <button className="loginbutton" type="submit" disabled={isFetching}>
                            {isFetching ? "loading" : "Log in"}
                        </button>
                        {errorMessage ? <label className="errorBox">{errorMessage}</label> : null}
                        <span className="forgotPassword">Forgot Password?</span>
                        <div className="createRightAccount">
                            <span className="newRegister">New Register? </span>
                            <button className="createAccount" onClick={handleRegisterRedirect}>Create an account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )}