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
            <Link to={"/icon"}>
              <b>Icon</b> 图标
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/button"}>
              <b>Button</b> 按钮
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/switch"}>
              <b>Switch</b> 开关
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/input"}>
              <b>Input</b> 输入框
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/radio"}>
              <b>Radio</b> 单选框
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/checkbox"}>
              <b>Checkbox</b> 复选框
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/modal"}>
              <b>Modal</b> 模态框
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/actionSheet"}>
              <b>ActionSheet</b> 动作面板
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/toast"}>
              <b>Toast</b> 轻提示
            </Link>
          </li>

          <li className="slide-li">
            <Link to={"/http"}>
              <b>Http</b> http插件
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
