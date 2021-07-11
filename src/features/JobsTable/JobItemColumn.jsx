import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './JobItemColumn.module.scss';
import { MdDone } from 'react-icons/md'
import ClipLoader from "react-spinners/ClipLoader";



const JobItemColumn = ({ partStatus }) => {


    const [status, setStatus] = useState(partStatus);

    useEffect(() => {
        setStatus(partStatus);
    }, [partStatus])

    return (
        <div className={styles.loadingItem}>
                {status === 'PENDING' && 'Pending'}
                {status === 'IN_PROGRESS' && <><ClipLoader loading={status === 'IN_PROGRESS'} size={15} />'In progress'</>}
                {status === 'DONE' && <><MdDone size={20} className={styles.tick} />'Done'</>}  
        </div>
    );
}


export default JobItemColumn;