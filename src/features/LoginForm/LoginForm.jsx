import React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import InputItem from '../../shared/InputItem/InputItem';
import Button from '../../shared/Button/Button';

const LoginForm = () => {

    const methods = useForm();
    const [loading, setLoading] = useState(false);

    const handleLogin = (data) => {
        setLoading(true);
        console.log(data.username);
        console.log(data.password);
        setLoading(false);
    }

    return (
        <FormProvider {...methods}>
            <form
                className={styles.loginForm}
                onSubmit={methods.handleSubmit(handleLogin)}
            >
                <InputItem id='username' requirements={{ required: true }} placeholderText='Username' />
                <InputItem id='password' requirements={{ required: true }} placeholderText='Password' type='password' />
                <Button isLoading={loading} text='Login' />
            </form>
        </FormProvider>
    )
}

export default LoginForm;