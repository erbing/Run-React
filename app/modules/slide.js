import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="slide">
                <ul>
                    <li> <Link to={'/'}> home </Link></li>
                    <li> <Link to={'/index'}>index </Link></li>
                    <li> <Link to={'/my'}>my </Link></li>
                </ul>
            </div>
        )
    }
}