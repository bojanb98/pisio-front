import getEnvironment from "../../environments";
import { post } from "../client";


const baseUrl = getEnvironment().baseAuthServiceUrl;

const login = (username, password) => {
    return post(
        baseUrl + 'login', 
        { username, password }
    )
}


const register = (username, password) => {
    return post(
        baseUrl + 'register', 
        { username, password }
    )
}


const auth = { login, register }


export default auth;