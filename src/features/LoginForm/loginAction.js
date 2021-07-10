import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import auth from "../../api/services/auth";

const loginAction = (username, password) => (dispatch) => {
    dispatch(loginPending())

    return auth
        .login(username, password)
        .then(
            response => {
                console.log('success')
                dispatch(loginSuccess())
            },
            error => {
                dispatch(loginFail('Invalid username or password'));
            })
        .catch(error => loginFail(error));
}

export default loginAction;