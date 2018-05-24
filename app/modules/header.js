import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                 <i className="icon icon-appreciate"></i>
                 <i className="icon icon-check"></i>
                <h2> this is header </h2>
            </div>
        )
    }
}