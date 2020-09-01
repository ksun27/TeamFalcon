import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Misc */
import { ROUTES } from "./routes";

/* Components */
import Navigation from "./Pages/Navigation";
import Personal_info from "./Pages/Personal_info";
import Landing from "./Pages/Landing";
import Symptoms from "./Pages/Symptoms";
import Clinics from "./Pages/clinics_near_me";
import Breadcrumbs from "./Pages/Breadcrumbs";
import Confirmation from './Pages/confirmation';

function App() {
  return (
    //The router navigates to the different pages
    <React.Fragment>
      <Router>
        <Navigation />
        <Breadcrumbs />
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.INFO} component={Personal_info} />
          <Route exact path={ROUTES.SYMPTOMS} component={Symptoms} />
          <Route exact path={ROUTES.CLINICS} component={Clinics} />
          <Route exact path={ROUTES.CONFIRMATION} component={Confirmation} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
