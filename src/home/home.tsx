import React, {PureComponent} from 'react';
import {ScrollListener} from "components/scrollListener";
import {Link} from "react-router-dom";
import {Routes} from "lib/routes";
import {Navbar} from "./navbar";
import {Banner} from "./banner";

export class Home extends PureComponent {
  render() {
    return <>
      <ScrollListener>
        {(offset) => <Navbar detached={offset > 100}/>}
      </ScrollListener>
      <Banner/>
    </>;
  }
}