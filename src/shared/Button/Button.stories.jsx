import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
}

export const IdleButton = () => <Button text={'Login'} isLoading={false} />
export const LoadingButton = () => <Button text={'Login'} isLoading={true} />