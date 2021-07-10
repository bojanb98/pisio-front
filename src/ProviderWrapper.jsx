import React from 'react';
import { Provider } from 'react-redux';
import store from './store';


const ProviderWrapper = ({ children }) =>
    <Provider store={store}>
        {children}
    </Provider>


const StoryProviderDecorator = (Story) => {
    <ProviderWrapper>
        <Story />
    </ProviderWrapper>
}


export {
    ProviderWrapper,
    StoryProviderDecorator
}