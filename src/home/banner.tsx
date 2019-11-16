import './banner.sass';

import React from "react";

export function Banner(props: {}) {
  return <div className="home-banner">
    <img className="background" src={require('./images/banner.jpg')} alt=""/>
    <div className="container">
      <div className="slogan">رتبه و محل قبولی در آزمون کارشناسی ارشد</div>
    </div>
    <div className="slider">
      <div className="wrapper">
        <div className="item">
          <img src={require('./images/society.svg')} alt=""/>
          <header>خانواده ۲ میلیون نفری ماهان</header>
          <label>ماهان بیش از ۲۰ سال است که در خدمت دانش‌آموختگان سراسر کشور است.</label>
        </div>
        <div className="item">
          <img src={require('./images/home.svg')} alt=""/>
          <header>قبولی تضمینی در کنکور سراسری</header>
          <label>ارائه برنامه درسی، آموزش مستمر در کنار بهترین اساتید کنکور شما را در قبولی یاری می‌کند.</label>
        </div>
        <div className="item">
          <img src={require('./images/study.svg')} alt=""/>
          <header>انتشار بیش از ۱۰۰ کتاب کمک درسی</header>
          <label>نگران منابع کنکور نباشید، ما در ماهان بهترین کتاب ها را برای شما گرد هم آوردیم.</label>
        </div>
      </div>
    </div>
  </div>
}