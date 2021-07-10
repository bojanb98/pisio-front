import React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import InputItem from '../../shared/InputItem/InputItem';
import Button from '../../shared/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import loginAction from './loginAction';


const LoginForm = () => {

    const methods = useForm();

    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.login);

    const handleLogin = (data) => {
        dispatch(loginAction(data.username, data.password));
    }

    return (
        <FormProvider {...methods}>
            <form
                className={styles.loginForm}
                onSubmit={methods.handleSubmit(handleLogin)}
            >
                <InputItem id='username' requirements={{ required: true }} placeholderText='Username' />
                <InputItem id='password' requirements={{ required: true }} placeholderText='Password' type='password' />
                <Button isLoading={isLoading} text='Login' />
                
            </form>
        </FormProvider>
    )
}

export default LoginForm;