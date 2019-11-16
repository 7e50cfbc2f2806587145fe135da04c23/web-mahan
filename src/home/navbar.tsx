import './navbar.sass';

import React from 'react';
import {Link} from "react-router-dom";
import {Routes} from "lib/routes";

export function Navbar(props: {detached: boolean}) {
  const {detached} = props;
  return <div className={`home-navbar ${detached ? 'is-detached' : ''}`}>
    <div className="container wrapper">
      <div className="links right">
        <i className="icon mobile">menu</i>
        <img src={require('./images/logo.png')} alt="موسسه آموزش عالی ماهان" className="brand"/>
        <Link to={Routes.home()} className="link">تخمین رتبه</Link>
        <Link to={Routes.home()} className="link">محل قبولی</Link>
        <Link to={Routes.home()} className="link">درباره ما</Link>
      </div>
      <div className="links left">
        <Link to={Routes.home()} className="link">نتایج</Link>
        <div className="hs-2"/>
        <Link to={Routes.home()} className="link outline">ورود و ثبت نام</Link>
        <i className="icon outlined mobile">favorite_border</i>
        <i className="icon outlined mobile">account_circle</i>
      </div>
    </div>
  </div>
}