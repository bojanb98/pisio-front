import axios from "axios";


const post = (url, data, ...options) => {
    return axios.post(url, data, ...options);
}


export {
    post
};
