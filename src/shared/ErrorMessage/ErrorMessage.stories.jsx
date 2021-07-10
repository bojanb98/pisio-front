import React from 'react';

import ErrorMessage from './ErrorMessage';

export default {
  component: ErrorMessage,
  title: 'Components/ErrorMessage',
}

export const SimpleErrorMessage = () => <ErrorMessage message='Invalid username or password' />