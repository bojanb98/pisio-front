import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import RouteWrapper from "./RouterWrapper";


const Routes = (_) => {
   return (
      <Router>
         <Switch>
            <RouteWrapper exact path='/login' component={Login} />
            <RouteWrapper exact path='/register' component={Register} />

            <Redirect from="*" to="/" /> 
         </Switch>
      </Router>
   );
};

export default Routes;
