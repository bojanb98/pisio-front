import React from 'react';
import styles from './FileItem.module.scss';
import { VscClose } from "react-icons/vsc";

const FileItem = ({fileName}) => {

    return (
        <div className={styles.fileItem}>
            {fileName}
            <VscClose className={styles.deleteButton}/>
        </div>
    )
}

export default FileItem;