import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Events from "./pages/events/Events";
import EventAdd from "./pages/events/EventAdd";
import Users from "./pages/Users";

function App() {
  return (
    <div className="w-100">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/events" component={Events} />
            <Route path="/event/add" component={EventAdd} />
            <Route path="/users" component={Users} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
