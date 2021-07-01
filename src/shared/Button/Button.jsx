import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import styles from './Button.module.scss'

const Button = ({ text, isLoading }) => {

    const [loading, setLoading] = useState(isLoading);

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading])

    return (
        <button
            className={styles.primaryButton}
            type="submit"
        >
            <CircleLoader loading={loading} />
            <span>{text}</span>
        </button>
    )
}

export default Button;