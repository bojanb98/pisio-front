import React, { useEffect, useState } from 'react';
import JobItem from './JobItem';
import styles from './JobsTable.module.scss';
import JobsTableHeader from './TableHeader';


const JobsTable = ({ jobs, sendJsonMessage, lastJsonMessage }) => {

    const [currentJobs, setCurrentJobs] = useState(jobs);

    useEffect(() => {
        setCurrentJobs(jobs);
    }, [jobs]);


    return (
        <div className={styles.tableContainer}>

            <JobsTableHeader />

            {currentJobs.map((item, key) =>
                <JobItem key={key} jobId={item} lastJsonMessage={lastJsonMessage} />
            )}
        </div>
    );
}

export default JobsTable;