import React from 'react';
import { useState } from 'react';
import styles from './Home.module.scss';


const Home = () => {

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

export default Home;