import React, {Component} from 'react';
import {consumer} from "coreact";
import {Route, Switch} from "react-router";
import {Routes} from "lib/routes";
import {Home} from "./home/home";

@consumer
export class App extends Component {

  render() {
    return <Switch>
      <Route path={Routes.home()} component={Home}/>
    </Switch>
  }
}
