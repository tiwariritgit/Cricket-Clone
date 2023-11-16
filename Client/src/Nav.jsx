import React from 'react';
import { Link } from 'react-router-dom';

// import "../styles/navbar.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { AccountCircle } from "@mui/icons-material";

import {
  View,
} from 'react-native';

const Nav=()=>{
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(user);
    const loggedInUser = sessionStorage.getItem('user');
    const isUserSignedUp = sessionStorage.getItem('isUserSignedUp');
    const users = JSON.parse(loggedInUser)
    console.log("loggedInUser = "+loggedInUser);
    console.log("isUserSignedUp = "+isUserSignedUp);

    const handleLogout = () => {
       // e.preventDefault();
        sessionStorage.removeItem('user');
        navigate('/login')
    };

    return(
        <div>
            <ul className="Nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Rankings">Rankings</Link></li>
                <li><Link to="/Stories">Top Stories</Link></li>
                <li><Link to="/Fixtures">Fixtures</Link></li>
                <li><Link to="/About">About</Link></li>
                {/* <li>
                    <Link to="/register">
                        <View>
                            {isUserSignedUp 
                            ?
                                <Link to="/login">
                                   <View>
                                      {loggedInUser ? <button onClick={handleLogout}>Logout</button> : <span>Login</span>}
                                    </View> 
                                </Link>
                            : <span>Sign Up</span>
                            }
                        </View>
                    </Link>
                </li> */}

                <li>
                    <Link to='/register'> 
                        <View>
                            {isUserSignedUp ? <span></span> : <span>Sign Up</span>}
                        </View>
                    </Link>
                </li>

                {/* <li>
                    <Link to="/register">
                        Sign Up
                    </Link>
                </li> */}
                <li>
                    <Link to="/login">
                        <View>
                            {isUserSignedUp && !loggedInUser ? <span>Login</span> : <span></span>}
                        </View>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <View>
                            {loggedInUser ? <button onClick={handleLogout} className="logout">Logout</button> : <span></span>}
                        </View>
                    </Link>
                </li>
                <li>
                    <Link to='/profile'> 
                        <View>
                            {loggedInUser ? <i><span>{users.username}</span></i>  : <span></span>}
                        </View>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
