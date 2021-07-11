import React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './JobForm.module.scss';
import FileItem from './FileItem';
import { useEffect } from 'react';
import Button from '../../shared/Button/Button';
import files from '../../api/services/files';


const JobForm = ({ addJobToTable }) => {

    const methods = useForm();

    const images = methods.watch('images');

    useEffect(() => {
        console.log(images);
    }, [images])

    const [loading, setLoading] = useState(false);

    const addJob = (data) => {
        setLoading(true);
        files
            .upload(data.images)
            .then(
                response => {
                    addJobToTable(response.data.jobId);
                }, 
                error => {
                    console.log(error);
                }
            )
            .catch(error => {
                console.log(error);
            })
            .then(setLoading(false));
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.jobForm} onSubmit={methods.handleSubmit(addJob)}>
                <label className={styles.chooseImagesLabel}>
                    <input {...methods.register('images')} type='file' multiple name='images' className={styles.fileInput} />
                    {'Choose images'}
                </label>
                <div className={styles.filesContainer}>
                    {images && images.length > 0 && Array.from(images).map((image, key) => <FileItem key={key} fileName={image.name} />)}
                </div>
                <Button isLoading={loading} text='Add job' />
            </form>
        </FormProvider>
    );
}

export default JobForm;