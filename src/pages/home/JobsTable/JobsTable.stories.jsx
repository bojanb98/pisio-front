import React from 'react';

import JobsTable from './JobsTable';

export default {
  component: JobsTable,
  title: 'Components/JobsTable/JobsTable',
}


const jobs = ['123', '1234', '12345', '123456']

export const EmptyJobsTable = () => <JobsTable jobs={[]} lastJsonMessage=''/>
export const JobsTableWithItems = () => <JobsTable jobs={jobs} lastJsonMessage={{jobId: '12345'}}/>