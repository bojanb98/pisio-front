import React from 'react';

import JobItemColumn from './JobItemColumn';

export default {
  component: JobItemColumn,
  title: 'Features/JobsTable/JobItemColumn',
}


export const PendingColumn = () => <JobItemColumn partStatus={'PENDING'} />
export const LoadingColumn = () => <JobItemColumn partStatus={'IN_PROGRESS'} />
export const DoneColumn = () => <JobItemColumn partStatus={'DONE'} />