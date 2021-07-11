import React from 'react';
import { Redirect, Switch } from "react-router-dom";
import AppLayout from '../layouts/AppLayout/AppLayout';
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RouteWrapper from "./RouterWrapper";


const Routes = () => {
   return (
      <Switch>
         <PrivateRoute exact path={['/', '/home']} component={HomePage} layout={AppLayout} />
         <PublicRoute exact path='/login' component={LoginPage} layout={AppLayout} />
         <PublicRoute exact path='/register' component={RegisterPage} layout={AppLayout} />

         <Redirect from="*" to="/" />
      </Switch>
   );
};

export default Routes;
