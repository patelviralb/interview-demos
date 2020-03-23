import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from '../components/home';
import FieldBuilder from '../components/fieldBuilder';

class AppRouter extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route
                path={'/home'}
                exact={true}
                component={Home}
            />

            <Route
                path={'/field-builder'}
                exact={true}
                component={FieldBuilder}
            />

            <Route
                path="*"
                render={() => {
                  return (<Redirect to="/home"/>);
                }}
            />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default AppRouter;