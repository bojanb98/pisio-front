import getEnvironment from "../../environments";
import { post } from "../client";


const baseUrl = getEnvironment().baseAuthServiceUrl;

const login = async (username, password) => {
    const response = await post(
        baseUrl + 'login', 
        { body: JSON.stringify({ username, password }) }
    )
    return response;
}


const register = async (username, password) => {
    const response = await post(
        baseUrl + 'register', 
        { body: JSON.stringify({ username, password }) }
    )
    return response;
}


const auth = { login, register }


export default auth;