import getEnvironment from "../../environments";
import AUTH_TOKEN_STORAGE_KEY from "../../features/LoginForm/loginConstants";
import { post } from "../client";


const baseUrl = getEnvironment().baseFileServiceUrl;

const getToken = () => {
    return JSON.parse(localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)).jwtToken;
}

const upload = (images) => {
    const formData = new FormData();
    for (let i = 0; i < images.length; ++i) {
        formData.append('files', images[i]);
    }

    return post(
        baseUrl + '/file/upload',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + getToken()
            },
        }
    )
}


const download = (jobId) => {
    return post(
        baseUrl + '/file/download',
        { jobId },
        {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            },
            responseType: 'blob'
        }
    );
}


const files = { upload, download }

export default files;