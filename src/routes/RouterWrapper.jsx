import { Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout/AppLayout";

const RouteWrapper = ({ component: Component, ...rest }) => {

   const Layout = AppLayout;

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
