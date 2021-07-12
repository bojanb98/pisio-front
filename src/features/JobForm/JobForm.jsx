import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import files from '../../api/services/files';
import Button from '../../shared/Button/Button';
import FileItem from './FileItem';
import styles from './JobForm.module.scss';


const JobForm = ({ addJobToTable }) => {

    const methods = useForm();

    const images = methods.watch('images');

    const [loading, setLoading] = useState(false);

    const addJob = (data) => {
        setLoading(true);
        files
            .upload(data.images)
            .then(
                response => {
                    addJobToTable(response.data.jobId);
                    methods.reset();
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
        <div className={styles.formContainer}>
            <FormProvider {...methods}>
                <form className={styles.jobForm} onSubmit={methods.handleSubmit(addJob)}>
                    <label className={styles.chooseImagesLabel}>
                        <input {...methods.register('images')} type='file' multiple name='images' className={styles.fileInput} />
                        {'Choose images'}
                    </label>
                    <Button isLoading={loading} text='Add job' />
                </form>
            </FormProvider>

            <div className={styles.filesContainer}>
                {images && images.length > 0 && Array.from(images).map(image => <FileItem fileName={image.name} />)}
            </div>
        </div>
    );
}

export default JobForm;