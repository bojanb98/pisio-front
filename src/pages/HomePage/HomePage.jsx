import React, { useState } from 'react';
import JobForm from '../../features/JobForm/JobForm';
import JobsTable from '../../features/JobsTable/JobsTable';
import styles from './HomePage.module.scss';


const HomePage = () => {

    const [jobs, setJobs] = useState([])

    const addJob = (newJob) => {
        setJobs([...jobs, newJob]);
    }

    return (
        <div className={styles.homePage}>
            <JobForm addJobToTable={addJob}/>
            <JobsTable jobs={jobs} lastJsonMessage='' />
        </div>

    );
}

export default HomePage;