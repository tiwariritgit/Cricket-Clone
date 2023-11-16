//import axios from './utils/client.js';
import axios from "axios";
import { LoginFailure, LoginStart, LoginSuccess } from "./context/AuthActions"
import { SERVER_URL } from "./utils/client.js";
// import { useDispatch } from "react-redux";

export const loginCall = async (userCredential, dispatch) => {
    dispatch((LoginStart));
    try {
        const res = await axios.post(`${SERVER_URL}/api/auth/login`, userCredential)
        sessionStorage.setItem('user', JSON.stringify(res.data))
        console.log(res.data)
        dispatch(LoginSuccess(res.data))
    } catch (error) {
        dispatch(LoginFailure(error))
    }
}