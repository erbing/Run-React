import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./app/assets/icon/iconfont.less";
import style from "./app/assets/less/index.less";
/**
 * 引入 redux
 */
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";

/**
 * 引入 reducers, store
 */
import store from "./app/store";
/**
 * 页面的 主题架构 header  slide main 三大板块
 * header 主要是处理 头部内容
 * slide  主要是 侧边的 内容导航
 * main   主要是显示当前路由的内容
 */
import Header from "./app/modules/header.js";
import Main from "./app/modules/main.js";
import Slide from "./app/modules/slide.js";

let curHeaderTitle = "首页 Index";

const APP = () => (
  <div className="app">
    <Slide />
    <div className="main">
      <Header title={curHeaderTitle} />
      <Main />
    </div>
  </div>
);

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <APP />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
