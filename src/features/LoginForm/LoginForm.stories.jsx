import React from 'react';
import { StoryProviderDecorator } from '../../ProviderWrapper';
import LoginForm from './LoginForm';


export default {
  component: LoginForm,
  title: 'Features/LoginForm',
  decorators: [StoryProviderDecorator]
}

export const DefaultLoginForm = () => <LoginForm />
