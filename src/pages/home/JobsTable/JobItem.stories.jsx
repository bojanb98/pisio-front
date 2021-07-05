import React from 'react';

import JobItem from './JobItem';

export default {
  component: JobItem,
  title: 'Components/JobItem',
}



export const LoadingJobItem = () => <JobItem jobId='123456789' lastJsonMessage={{jobId: '123'}}/>
export const CompletedJobItem = () => <JobItem jobId='123456789' lastJsonMessage={{jobId: '123456789'}}/>