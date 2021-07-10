import React from 'react';
import { useState } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import styles from './HomePage.module.scss';


const HomePage = () => {

    const [jobs, setJobs] = useState([])

    const addJob = (newJob) => {
        setJobs([...jobs, newJob]);
    }

    return (
        <AppLayout>
            <div className={styles.homePage}>
                np
            </div>
        </AppLayout>
        
    );
}

export default HomePage;