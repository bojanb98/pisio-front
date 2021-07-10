import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../shared/Button/Button';
import ErrorMessage from '../../shared/ErrorMessage/ErrorMessage';
import InputItem from '../../shared/InputItem/InputItem';
import loginAction from './loginAction';
import styles from './LoginForm.module.scss';


const LoginForm = () => {

    const methods = useForm();

    const history = useHistory();

    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.login);

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);


    const handleLogin = (data) => {
        dispatch(loginAction(data.username, data.password, history));
    }

    return (
        <FormProvider {...methods}>
            <form
                className={styles.loginForm}
                onSubmit={methods.handleSubmit(handleLogin)}
            >
                <InputItem id='username' requirements={{ required: true }} placeholderText='Username' />
                <InputItem id='password' requirements={{ required: true }} placeholderText='Password' type='password' />
                {error && <ErrorMessage message={error} />}
                <Button isLoading={isLoading} text='Login' />
            </form>
        </FormProvider>
    )
}

export default LoginForm;