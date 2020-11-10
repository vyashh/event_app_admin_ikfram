import React from "react";
import Signup from "./pages/Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Signup} />
            </Switch>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
