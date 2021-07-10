import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from './Button.module.scss'
import '../../App.css';

const Button = ({ text, isLoading }) => {

    const [loading, setLoading] = useState(isLoading);

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading])

    const override = css`
        margin: 0 0.4rem 0 0;
    `;

    return (
        <button
            className={styles.primaryButton}
            type="submit"
            disabled={loading}
        >
            <ClipLoader loading={loading} size={15} css={override}/>
            {text}
        </button>
    )
}

export default Button;