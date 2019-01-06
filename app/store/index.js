import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import promise from "redux-promise";
/**
 * 创建一个初始化的state
 */
const initState = {
  card: {
    name: "Jack Ma",
    avator: "a.jpg"
  },
  dialog: {
    states: false
  },
  title: "首页 Index"
};

let enhancer = compose(applyMiddleware(thunk, promise));

/**
 * 创建一个 store 仓库
 */

const store = createStore(reducer, initState, enhancer);

export default store;
