import getEnvironment from "../../environments";
import { post } from "../client";


const baseUrl = getEnvironment().baseFileServiceUrl;

const upload = async (images) => {
    const formData = new FormData();
    formData.append('files', images);

    const response = await post(
        baseUrl + 'upload',
        {
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData
        }
    )
    return response;
}


const download = async (jobId) => {
    const response = await post(
        baseUrl + '/download',
        { body: JSON.stringify({ jobId }) }
    )
    return response;
}


const files = { upload, download }

export default files;