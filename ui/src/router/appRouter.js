import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from '../components/home';
import FormBuilder from '../components/formBuilder';

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
                path={'/form-builder'}
                exact={true}
                component={FormBuilder}
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