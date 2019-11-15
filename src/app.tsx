import React, {Component} from 'react';
import {consumer, inject} from "coreact";
import {AuthService} from "services/authService";

@consumer
export class App extends Component {

  auth = inject(AuthService, this);

  render() {
    return <div className="hello-world">
      hello <i className="icon">wb_sunny</i>
      salam
    </div>
  }
}
