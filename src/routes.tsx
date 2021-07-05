import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoutes from './private.routes';

import Home from "./views/Home";
import Courses from "./views/Couses";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Dashboard from "./views/Dash";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoutes path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;