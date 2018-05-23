import React from 'react'
import { Link } from 'react-router-dom'

const logoImg = require('../assets/img/index/logo2.jpg')
// const logoImg = 'xxx'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="slide">
                <div className="slide-header flex-xy">
                    <img src={logoImg} className="slide-logo"></img>
                    <span className="slogn">ReactJs</span>
                </div>
                
                <ul className="slide-ul">
                    <li className="slide-li"> <Link to={'/'}> HOME </Link></li>
                    <li className="slide-li"> <Link to={'/index'}>INDEX </Link></li>
                    <li className="slide-li"> <Link to={'/my'}>MY </Link></li>
                </ul>
            </div>
        )
    }
}