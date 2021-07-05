import React from 'react';
import styles from './TableHeader.module.scss';


const JobsTableHeader = () => 

    <div className={styles.headerContainer}>
        <div className={styles.idHeaderContainer}>
            Job ID
        </div>
        <div className={styles.statusHeaderContainer}>
            Optical character recognition status
        </div>
        <div className={styles.statusHeaderContainer}>
            GIF creation status
        </div>
        <div className={styles.statusHeaderContainer} />
    </div>


export default JobsTableHeader;