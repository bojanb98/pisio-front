import React, { useEffect, useState } from 'react';
import styles from './JobItem.module.scss';
import JobItemColumn from './JobItemColumn';

const JobItem = ({ jobId, lastJsonMessage }) => {

    const [ocrStatus, setOcrStatus] = useState('PENDING');
    const [pdfStatus, setPdfStatus] = useState('PENDING');
    const [gifStatus, setGifStatus] = useState('PENDING');

    const [isAllDone, setIsAllDone] = useState(false);

    useEffect(() => {
        const newIsAllDone = ocrStatus === 'DONE' && pdfStatus === 'DONE' && gifStatus === 'DONE';
        setIsAllDone(newIsAllDone);
    }, [ocrStatus, pdfStatus, gifStatus]);

    useEffect(() => {
        if (lastJsonMessage && lastJsonMessage.jobId === jobId) {
            const jobPart = lastJsonMessage.jobPart;
            const partStatus = lastJsonMessage.partStatus;
            if (jobPart === 'OCR') {
                setOcrStatus(partStatus);
            } else if (jobPart === 'PDF') {
                setPdfStatus(partStatus);
            } else if (jobPart === 'GIF') {
                setGifStatus(partStatus);
            }
        }
    }, [lastJsonMessage]);

    return (
        <div className={styles.jobItem}>
            <label className={styles.idLabel}>{jobId}</label>
            <JobItemColumn partStatus={ocrStatus} />
            <JobItemColumn partStatus={pdfStatus} />
            <JobItemColumn partStatus={gifStatus} />
            <div className={styles.hrefContainer}>
                {isAllDone && <a href="facebook.com" className={styles.downloadHref}>Download</a>}
            </div>
        </div>
    )
}


export default JobItem;