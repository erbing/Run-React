import React from 'react'
import { Link } from 'react-router-dom'

import style from '../assets/css/index.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(style)
        return (
            <div className={style.header}>
                <ul>
                    <li> <Link to={'/'}> home </Link></li>
                    <li> <Link to={'/index'}>index </Link></li>
                    <li> <Link to={'/my'}>my </Link></li>
                </ul>
            </div>
        )
    }
}