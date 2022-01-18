import { Switch } from "react-router-dom";
import { Route } from "./routes";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { SignUp } from "../pages/SignUp";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    {/* <Route path="/signup" component={SignUp} /> */}
  </Switch>
);
