import fileDownload from 'js-file-download';
import React, { useEffect, useState } from 'react';
import files from '../../api/services/files';
import styles from './JobItem.module.scss';
import JobItemColumn from './JobItemColumn';

const JobItem = ({ jobId, lastJsonMessage }) => {

    const [ocrStatus, setOcrStatus] = useState('PENDING');
    const [pdfStatus, setPdfStatus] = useState('PENDING');
    const [gifStatus, setGifStatus] = useState('PENDING');

    const [isAllDone, setIsAllDone] = useState(false);

    const downloadFiles = () => {
        files
            .download(jobId)
            .then(
                response => {
                    fileDownload(response.data, 'result.zip');
                },
                error => console.log(error)
            )
            .catch(error => console.log(error));
    }

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
            <div className={styles.downloadContainer}>
                {isAllDone && <label onClick={_ => downloadFiles()} className={styles.downloadContainer}>Download</label>}
            </div>
        </div>
    )
}


export default JobItem;