import React from 'react';
import { StoryProviderDecorator } from '../../ProviderWrapper';
import RegisterForm from './RegisterForm';


export default {
  component: RegisterForm,
  title: 'Features/RegisterForm',
  decorators: [StoryProviderDecorator]
}

export const DefaultRegisterForm = () => <RegisterForm />
