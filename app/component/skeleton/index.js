// about components
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import style from "./index.css";

class Skr extends React.Component {
  render() {
    return (
      <div className="skeleton page">
        <div className="skeleton-nav" />
        <div className="skeleton-swiper" />
        <ul className="skeleton-tabs">
          <li className="skeleton-tabs-item">
            <span />
          </li>
          <li className="skeleton-tabs-item">
            <span />
          </li>
          <li className="skeleton-tabs-item">
            <span />
          </li>
          <li className="skeleton-tabs-item">
            <span />
          </li>
          <li className="skeleton-tabs-item">
            <span />
          </li>
          <li className="skeleton-tabs-item">
            <span />
          </li>
          <li className="skeleton-tabs-item">
            <span />
          </li>
          <li className="skeleton-tabs-item">
            <span />
          </li>
        </ul>
        <div className="skeleton-banner" />
        <div className="skeleton-productions" />
        <div className="skeleton-productions" />
        <div className="skeleton-productions" />
        <div className="skeleton-productions" />
        <div className="skeleton-productions" />
        <div className="skeleton-productions" />
      </div>
    );
  }
}

// console.log(style)
// console.log(renderToStaticMarkup(<Skr />));

const html = "<style>" + { style } + "</style>" + renderToStaticMarkup(<Skr />);

export default html;
