import React from 'react';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => 
    <div className={styles.errorContainer}>
        {message}
    </div>


export default ErrorMessage;