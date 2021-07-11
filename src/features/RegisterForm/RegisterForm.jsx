import React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import auth from '../../api/services/auth';
import Button from '../../shared/Button/Button';
import ErrorMessage from '../../shared/ErrorMessage/ErrorMessage';
import InputItem from '../../shared/InputItem/InputItem';
import SuccessMessage from '../../shared/SuccessMessage/SuccessMessage';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {

    const methods = useForm();
    const [loading, setLoading] = useState(false);

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleRegister = (data) => {
        setLoading(true);
        
        auth
            .register(data.username, data.password)
            .then(
                _ => {
                    setIsSuccess(true);
                }, 
                error => {
                    console.log(error);
                    setIsError(true);
                }
            )
            .catch(error => {
                console.log(error);
                setIsError(true);
            })
        setLoading(false);
    }

    return (
        <FormProvider {...methods}>
            <form
                className={styles.registerForm}
                onSubmit={methods.handleSubmit(handleRegister)}
            >
                <InputItem id='username' requirements={{ required: true }} placeholderText='Username' />
                <InputItem id='password' requirements={{ required: true }} placeholderText='Password' type='password' />
                <InputItem 
                    id='repeatPassword' 
                    requirements={{ required: true, validate: value => value === methods.watch('password')}} 
                    placeholderText='Repeat password' 
                    type='password' />
                {isError && <ErrorMessage text='An error ocurred during registration' />}
                {isSuccess && <SuccessMessage text='You have sucessfully registered' />}
                <Button isLoading={loading} text='Login' />
            </form>
        </FormProvider>
    )

}

export default RegisterForm;