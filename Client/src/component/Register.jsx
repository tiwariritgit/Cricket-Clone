import "../Design/Register.css";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
//import axios from './../utils/client.js';
import axios from "axios";
import { SERVER_URL } from './../utils/client.js';


export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                const res = await axios.post(`${SERVER_URL}/api/auth/register`, user);
                sessionStorage.setItem('isUserSignedUp', JSON.stringify(res.data));
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleLoginRedirect = ()=> {
        navigate('/login');
    };

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
                            placeholder="Username" 
                            required ref={username} 
                            className="loginInput" 
                        />
                        <input 
                            placeholder="Email" 
                            type="email" 
                            required="true"
                            ref={email} 
                            className="loginInput" 
                        />
                        <input 
                            placeholder="Password" 
                            type="password" 
                            required="true"
                            ref={password} 
                            className="loginInput" 
                        />
                        <input 
                            placeholder="Confirm Passowrd" 
                            type="password" 
                            minLength="6"
                            required="true"
                            ref={passwordAgain} 
                            className="loginInput" 
                        />
                        <button className="loginbutton" type='submit'>Sign Up</button>
                        <button className="loginButtonRegister" onClick={handleLoginRedirect}>
                            Login Into Account
                        </button>
                    </form>
                </div>
            </div>
        
        </div>
    )
}