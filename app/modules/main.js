import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "../assets/less/index.less";
import "../assets/less/main.less";

import Indexs from "../pages/index";
import Icons from "../pages/icon";
import Http from "../pages/http";

import Btn from "../pages/button";
import Color from "../pages/color";
import Switchs from "../pages/switch";
import Modal from "../pages/modal";
import Toast from "../pages/toast";
import ActionSheet from "../pages/actionSheet";
import Input from "../pages/input";
import Radio from "../pages/radio";
import Popup from "../pages/popup";

import Start from "../pages/start";
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

const Schedule = Indexs;

const Icon = Icons;

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path="/" component={Indexs} />
      <Route path="/start" component={Start} />
      <Route path="/icon" component={Icon} />
      <Route path="/http" component={Http} />
      <Route path="/button" component={Btn} />
      <Route path="/color" component={Color} />
      <Route path="/switch" component={Switchs} />
      <Route path="/modal" component={Modal} />
      <Route path="/toast" component={Toast} />
      <Route path="/actionSheet" component={ActionSheet} />
      <Route path="/input" component={Input} />
      <Route path="/radio" component={Radio} />
      <Route path="/popup" component={Popup} />
      <Route path="/about" component={About} />
      <Route path="/lazyLoad" component={LazyLoad} />
    </Switch>
  </div>
);

export default Main;
