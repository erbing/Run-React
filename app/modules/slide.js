import React from 'react'
import { Link } from 'react-router-dom'

const logoImg = require('../assets/img/index/logo.jpg')
// const logoImg = 'xxx'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="slide">
                <div className="slide-header flex-xy">
                    <img src={logoImg}></img>
                </div>
                
                <ul>
                    <li> <Link to={'/'}> home </Link></li>
                    <li> <Link to={'/index'}>index </Link></li>
                    <li> <Link to={'/my'}>my </Link></li>
                </ul>
            </div>
        )
    }
}