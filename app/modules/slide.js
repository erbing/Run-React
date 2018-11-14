import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import "./modules.less";

const logoImg = require("../assets/img/index/logo2.jpg");

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slide">
        <div className="slide-header flex-xy">
          <img src={logoImg} className="slide-logo" />
          <span className="slogn">ReactJs</span>
          <em className="beta">Beta</em>
        </div>

        <ul className="slide-ul">
          <li className="slide-li">
            <Link to={"/"}>
              <b>Home</b> 首页
            </Link>
          </li>
          <li className="slide-li">
            <Link to={"/color"}>
              <b>Color</b> 颜色
            </Link>
          </li>
          <li className="slide-li">
            <Link to={"/button"}>
              <b>Button</b> 按钮
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/index"}>
              <b>Index</b> 介绍页
            </Link>
          </li>
          <li className="slide-li">
            <Link to={"/my"}>
              <b>My</b> 我的
            </Link>
          </li>
          <li className="slide-li">
            <Link to={"/icon"}>
              <b>Icon</b> 图标
            </Link>
          </li>
          <li className="slide-li">
            <Link to={"/http"}>
              <b>Http</b> http插件
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/about"}>
              <b>about us</b> 关于我们
            </Link>
          </li>
          <li className="slide-li">
            <Link to={"/lazyLoad"}>
              <b>LazyLoad</b> 图片懒加载
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
