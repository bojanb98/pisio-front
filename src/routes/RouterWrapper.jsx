import React from 'react';
import { Route } from "react-router-dom";

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => {

   return (
      <Route
         {...rest}
         render={() => (
            <Layout>
               <Component />
            </Layout>
         )}
      ></Route>
   );
};

export default RouteWrapper;
