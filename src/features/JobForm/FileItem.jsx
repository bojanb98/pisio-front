import React from 'react';
import styles from './FileItem.module.scss';

const FileItem = ({ fileName }) => {

    return (
        <div className={styles.fileItem}>
            {fileName}
        </div>
    )
}

export default FileItem;