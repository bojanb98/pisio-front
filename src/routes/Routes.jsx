import React from 'react';
import { Redirect, Switch } from "react-router-dom";
import AppLayout from '../layouts/AppLayout/AppLayout';
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import RouteWrapper from "./RouterWrapper";


const Routes = () => {
   return (
      <Switch>
         <RouteWrapper exact path={['/', '/home']} component={HomePage} layout={AppLayout} />
         <RouteWrapper exact path='/login' component={LoginPage} layout={AppLayout} />
         <RouteWrapper exact path='/register' component={RegisterPage} layout={AppLayout} />

         <Redirect from="*" to="/" />
      </Switch>
   );
};

export default Routes;
