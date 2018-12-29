import React from "react";
import "./index.less";

class LazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allImgs: [
        { url: "http://1.lazyloading.sinaapp.com/Lazy/images/1.jpg" },
        { url: "http://1.lazyloading.sinaapp.com/Lazy/images/2.jpg" },
        { url: "http://1.lazyloading.sinaapp.com/Lazy/images/3.jpg" },
        { url: "http://1.lazyloading.sinaapp.com/Lazy/images/4.jpg" },
        { url: "http://1.lazyloading.sinaapp.com/Lazy/images/5.png" },
        { url: "http://1.lazyloading.sinaapp.com/Lazy/images/6.jpg" },
        { url: "http://1.lazyloading.sinaapp.com/Lazy/images/7.png" }
      ]
    };
  }
  componentDidMount() {
    const lazyload = options => {
      // 获取图片外部dom
      let doc = options.id ? document.getElementById(options.id) : document;
      if (doc === null) return;
      // 获取当前dom 内，所有的图片标签
      let tmp = doc.getElementsByTagName("img");
      let tmplen = tmp.length;
      let imgobj = [];

      // 判断当前 元素是否到了应该显示的 位置
      const isLoad = ele => {
        let scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;
        if (typeof ele === "undefined") return false;
        let edit = ~~ele.getAttribute("data-range") || options.lazyRange;
        let clientHeight =
          scrollTop + document.documentElement.clientHeight + edit;
        let offsetTop = 0;

        while (ele.tagName.toUpperCase() !== "BODY") {
          offsetTop += ele.offsetTop;
          ele = ele.offsetParent;
        }
        return clientHeight > offsetTop;
      };

      // 给已经到了可以显示图片位置的 img 标签添加 src 值
      const setimg = ele => {
        ele.src = ele.getAttribute("data-src");
      };

      // 遍历当前 dom 内所有要显示的 img 标签
      for (let i = 0; i < tmplen; i++) {
        var _tmpobj = tmp[i];
        if (_tmpobj.getAttribute("data-src") !== null) {
          if (isLoad(_tmpobj)) {
            setimg(_tmpobj);
          } else {
            imgobj.push(_tmpobj);
          }
        }
      }

      // 滚动的时候动态 判断当前 元素的是否 可以赋值
      let len = imgobj.length;
      const handler = () => {
        for (let i = 0, end = len; i < end; i++) {
          let obj = imgobj[i];
          if (isLoad(obj)) {
            _setimg(obj);
            imgobj.splice(i, 1);
            len--;
            if (len === 0) {
              loadstop();
            }
          }
        }
      };

      // 根据上下文要求动态低进行 图片 src 赋值
      const _setimg = ele => {
        if (options.lazyTime) {
          setTimeout(function() {
            setimg(ele);
          }, options.lazyTime + ~~ele.getAttribute("data-time"));
        } else {
          setimg(ele);
        }
      };

      // 去除 滚动事件监听
      const loadstop = () => {
        window.removeEventListener
          ? window.removeEventListener("scroll", handler, false)
          : window.detachEvent("onscroll", handler);
      };

      loadstop();
      // 添加滚动事件监听
      window.addEventListener
        ? window.addEventListener("scroll", handler, false)
        : window.attachEvent("onscroll", handler);
    };

    lazyload({
      id: "imgs",
      lazyTime: 200,
      lazyRange: 100
    });
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <div className="run-lazyload">
        <h2 className="text-center" id="title">
          当前页面图片
        </h2>
        <div id="imgs">
          {this.state.allImgs.map((item, index) => {
            return (
              <li className="li-img" key={index}>
                <img
                  className="allImgs"
                  id={"img" + index}
                  data-src={item.url}
                />
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default LazyLoad;
