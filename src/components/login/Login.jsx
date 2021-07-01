import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const handleLogin = (data) => {
        console.log(data.username);
        console.log(data.password);
    }

    return (
        <div>
            
        </div>
    )
}

export default Login;