import React, { useState } from 'react';
import styles from './HomePage.module.scss';


const HomePage = () => {

    const [jobs, setJobs] = useState([])

    const addJob = (newJob) => {
        setJobs([...jobs, newJob]);
    }

    return (
        <div className={styles.homePage}>
            np
        </div>

    );
}

export default HomePage;