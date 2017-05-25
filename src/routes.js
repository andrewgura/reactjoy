// src/routes.js
import React from "react";
import { Router, Route } from "react-router";

import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import NotFound from "./Pages/NotFound/NotFound";
import BottleService from "./Pages/BottleService/BottleService";

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/rooftop" component={BottleService} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
