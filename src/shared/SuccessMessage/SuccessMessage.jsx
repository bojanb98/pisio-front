import React from 'react';
import styles from './SuccessMessage.module.scss';

const SuccessMessage = ({ message }) => 
    <div className={styles.successContainer}>
        {message}
    </div>


export default SuccessMessage;