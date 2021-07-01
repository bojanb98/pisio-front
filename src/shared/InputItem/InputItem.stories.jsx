import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import InputItem
    from './InputItem';
export default {
    component: InputItem,
    title: 'Components/InputItem',
}

export const SimpleInputItem = () => {

    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <form>
                <InputItem id='item1' requirements={{}} placeholderText={'Some text'}/>
            </form>
        </FormProvider>
        
    )
}