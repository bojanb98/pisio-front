import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './InputItem.module.scss'


const InputItem = ({
    id,
    requirements,
    placeholderText,
    type='text'
}) => {

    const formMethods = useFormContext();

    return (
        <input
        {...formMethods.register(id, requirements)}
        type={type}
        placeholder={placeholderText}
        className={styles.inputItem}
        />
    )

}

export default InputItem;