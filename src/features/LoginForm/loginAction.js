import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import auth from "../../api/services/auth";

const loginAction = (username, password, history) => (dispatch) => {
    dispatch(loginPending())

    return auth
        .login(username, password)
        .then(
            response => {
                console.log(response.data);
                sessionStorage.setItem('accessJWT', response.data.jwtToken);
                localStorage.setItem('imageProcessingToken', JSON.stringify(response.data));
                dispatch(loginSuccess());
                history.push('/home');
            },
            error => {
                console.log(error);
                dispatch(loginFail('Invalid username or password'));
            })
        .catch(error => loginFail(error));
}

export default loginAction;