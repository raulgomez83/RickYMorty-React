import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemDetail } from "../components/ItemDetail";
import { ListGrid } from "../components/ListGrid";

export const AppRoute = () => {
  return (
    <Router>
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Switch>
          <Route exact path="/" component={ListGrid} />
          <Route exact path="/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
};
