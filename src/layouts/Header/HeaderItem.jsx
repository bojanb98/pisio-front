import React from 'react';
import styles from './HeaderItem.module.scss';
import { Link } from 'react-router-dom';


const HeaderItem = ({ path, text, isLeft }) => {

    const itemStyle = isLeft ? styles.bigHeaderItem : styles.headerItem;

    return (
        <div className={itemStyle}>
            <Link className={styles.linkStyle} to={path}>{text}</Link>
        </div>
    );
}

export default HeaderItem;