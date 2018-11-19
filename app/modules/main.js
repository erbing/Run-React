import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "../assets/less/index.less";
import "../assets/less/main.less";

import Index from "../pages/index";
import Icons from "../pages/icon";
import Http from "../pages/http";

import Btn from "../pages/button";
import Color from "../pages/color";
import Switchs from "../pages/switch";
import Modal from "../pages/modal";

import About from "../pages/about";
import LazyLoad from "../pages/lazyLoad";

import Skr from "../component/skeleton/index.js";

// console.log(Skr);

const Home = props => (
  <div className="router">
    this is home pages
    <i className="icon icon-appreciate" />
    <i className="icon icon-check" />
    {Skr}
  </div>
);

const Roster = props => (
  <div className="router">
    this is index pages
    <li>
      {" "}
      <Link to={"/msg/123"}> msg </Link>
    </li>
  </div>
);

const Schedule = Index;

const Number = props => (
  <div className="router">
    this is Number pages and this is my prama id : {props.match.params.id}
  </div>
);

const Icon = Icons;

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/index" component={Roster} />
      <Route path="/my" component={Schedule} />
      <Route path="/msg/:id" component={Number} />
      <Route path="/icon" component={Icon} />
      <Route path="/http" component={Http} />
      <Route path="/button" component={Btn} />
      <Route path="/color" component={Color} />
      <Route path="/switch" component={Switchs} />
      <Route path="/modal" component={Modal} />
      <Route path="/about" component={About} />
      <Route path="/lazyLoad" component={LazyLoad} />
    </Switch>
  </div>
);

export default Main;
