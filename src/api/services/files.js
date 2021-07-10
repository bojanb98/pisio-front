import getEnvironment from "../../environments";
import { post } from "../client";


const baseUrl = getEnvironment().baseFileServiceUrl;

const upload = (images) => {
    const formData = new FormData();
    formData.append('files', images);

    return post(
        baseUrl + 'upload',
        formData,
        {
            headers: { 'Content-Type': 'multipart/form-data' },
        }
    )
}


const download = (jobId) => {
    return post(
        baseUrl + '/download',
        { jobId }
    );
}


const files = { upload, download }

export default files;