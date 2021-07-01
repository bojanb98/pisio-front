import React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../shared/Button/Button';
import InputItem from '../../shared/InputItem/InputItem';
import styles from './Register.module.scss';

const Register = () => {

    const methods = useForm();
    const [loading, setLoading] = useState(false);

    const handleRegister = (data) => {
        setLoading(true);
        console.log(data.errors)
        console.log(data.username);
        console.log(data.password);
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
                <Button isLoading={loading} text='Login' />
            </form>
        </FormProvider>
    )

}

export default Register;