import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import RouteWrapper from './RouterWrapper';


const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {

    const { isLoggedIn } = useSelector(state => state.login);

    return (
        !isLoggedIn ? <RouteWrapper component={Component} layout={Layout} rest={rest} /> : <Redirect to='/' />
    );
}

export default PublicRoute;