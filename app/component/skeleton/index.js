// about components
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import style from './index.css'

class Skr extends React.Component {
    render() {
        return (
        <div className="skeleton page">
            <div className="skeleton-nav"></div>
            <div className="skeleton-swiper"></div>
            <ul className="skeleton-tabs">
                <li className="skeleton-tabs-item"><span></span></li>
                <li className="skeleton-tabs-item"><span></span></li>
                <li className="skeleton-tabs-item"><span></span></li>
                <li className="skeleton-tabs-item"><span></span></li>
                <li className="skeleton-tabs-item"><span></span></li>
                <li className="skeleton-tabs-item"><span></span></li>
                <li className="skeleton-tabs-item"><span></span></li>
                <li className="skeleton-tabs-item"><span></span></li>
            </ul>
            <div className="skeleton-banner"></div>
            <div className="skeleton-productions"></div>
            <div className="skeleton-productions"></div>
            <div className="skeleton-productions"></div>
            <div className="skeleton-productions"></div>
            <div className="skeleton-productions"></div>
            <div className="skeleton-productions"></div>
        </div>
        )
    }
}

console.log(style)
console.log(renderToStaticMarkup(<Skr />))

const html = '<style>' + {style} + '</style>' + renderToStaticMarkup(<Skr />)

export default html