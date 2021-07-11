import React from 'react';

import SuccessMessage from './SuccessMessage';

export default {
  component: SuccessMessage,
  title: 'Components/SuccessMessage',
}

export const SimpleErrorMessage = () => <SuccessMessage message='You have successfully registered' />