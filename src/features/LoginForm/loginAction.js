import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import auth from "../../api/services/auth";

const loginAction = (username, password) => (dispatch) => {
    dispatch(loginPending())

    auth
        .login(username, password)
        .then(response => {
            console.log(response.data);
            dispatch(loginSuccess());
        })
        .catch(error => loginFail(error));
}

export default loginAction;