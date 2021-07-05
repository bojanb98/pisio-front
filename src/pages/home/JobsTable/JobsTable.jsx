import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import JobItem from './JobItem';
import styles from './JobsTable.module.scss';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import JobsTableHeader from './TableHeader';


const JobsTable = ({jobs}) => {

    const [currentJobs, setCurrentJobs] = useState(jobs);

    const websocketUrl = '';
    const token = '';
    
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(websocketUrl, {
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

    useEffect(() => {
        setCurrentJobs(jobs);
    }, [jobs]);


    return (
        <div className={styles.tableContainer}>
            
            <JobsTableHeader />

            {jobs.map((item, key) => {
                <JobItem key={key} jobId={item} lastJsonMessage={lastJsonMessage} />
            })}
        </div>
    );
}