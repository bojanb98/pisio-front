import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import getEnvironment from '../../environments';
import JobForm from '../../features/JobForm/JobForm';
import JobsTable from '../../features/JobsTable/JobsTable';
import AUTH_TOKEN_STORAGE_KEY from '../../features/LoginForm/loginConstants';
import styles from './HomePage.module.scss';


const HomePage = () => {

    const [jobs, setJobs] = useState([])

    const addJob = (newJob) => {
        setJobs([...jobs, newJob]);
    }

    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)).jwtToken;

    const { lastJsonMessage } = useWebSocket(getEnvironment().communicationServiceUrl, {
        protocols: token,
        onError: (e) => {
            console.log(e);
        },
        onReconnectStop: (e) => {
            console.log(e);
        },
        onClose: (e) => {
            console.log(e);
        }
    });

    return (
        <div className={styles.homePage}>
            <JobForm addJobToTable={addJob} />
            <JobsTable jobs={jobs} lastJsonMessage={lastJsonMessage} />
        </div>

    );
}

export default HomePage;