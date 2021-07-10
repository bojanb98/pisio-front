const send = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}


const post = async (url, options) => {
    const response = await send(url, {
        ...options,
        method: "POST",
    });
    return response;
}


export {
    post
};
