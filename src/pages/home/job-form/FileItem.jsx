import React from 'react';
import styles from './FileItem.module.scss';
import { VscClose } from "react-icons/vsc";

const FileItem = ({key, fileName}) => {

    return (
        <div className={styles.fileItem} key={key}>
            {fileName}
        </div>
    )
}

export default FileItem;