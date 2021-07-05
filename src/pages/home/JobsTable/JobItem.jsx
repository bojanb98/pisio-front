import React from 'react';
import { useState } from 'react';
import styles from './JobItem.module.scss';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from 'react';
import { MdDone } from 'react-icons/md'

const JobItem = ({ jobId, lastJsonMessage }) => {

    const [isOcrDone, setOcrDone] = useState(false);
    const [isGifDone, setGifDone] = useState(false);

    useEffect(() => {
        if (lastJsonMessage.jobId === jobId) {
            setOcrDone(true);
            setGifDone(true);
        }
    }, [lastJsonMessage]);

    return (
        <div className={styles.jobItem}>
            <label className={styles.idLabel}>{jobId}</label>
            <div className={styles.loadingItem}>
                {isOcrDone && <MdDone size={20} className={styles.tick} />}
                <ClipLoader loading={!isOcrDone} size={15} />
                {'Optical character recognition'}
            </div>
            <div className={styles.loadingItem}>
                {isGifDone && <MdDone size={20} className={styles.tick} />}
                <ClipLoader loading={!isGifDone} size={15} />
                {'Gif creation'}
            </div>
            <div className={styles.hrefContainer}>
                {isGifDone && isOcrDone && <a href="facebook.com" className={styles.downloadHref}>Download</a>}
            </div>
        </div>
    )
}


export default JobItem;