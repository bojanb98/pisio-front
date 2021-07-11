import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import auth from "../../api/services/auth";
import AUTH_TOKEN_STORAGE_KEY from "./loginConstants";

const loginAction = (username, password, history) => (dispatch) => {
    dispatch(loginPending())

    return auth
        .login(username, password)
        .then(
            response => {
                console.log(response.data);
                localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, JSON.stringify(response.data));
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