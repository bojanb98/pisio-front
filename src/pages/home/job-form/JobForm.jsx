import React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './JobForm.module.scss';
import Button from '../../../shared/Button/Button';
import InputItem from '../../../shared/InputItem/InputItem';
import FileItem from './FileItem';
import { useEffect } from 'react';


const JobForm = () => {

    const methods = useForm();

    const images = methods.watch('images');

    useEffect(() => {
        console.log(images);
    }, [images])

    const [loading, setLoading] = useState(false);

    const addJob = (data) => {
        setLoading(true);
        console.log(data);
        setLoading(false);
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.jobForm} onSubmit={methods.handleSubmit(addJob)}>
                <label className={styles.chooseImagesLabel}>
                    <input {...methods.register('images')} type='file' multiple name='images' className={styles.fileInput}/>
                    {'Choose images'}
                </label>
                
                {images && images.length > 0 && images.map(image => <FileItem fileName={image.namme} />)}
                <Button isLoading={loading} text='Add job' />
            </form>
        </FormProvider>
    );
}

export default JobForm;