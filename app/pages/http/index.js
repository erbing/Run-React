// https utils
import React from 'react'
import http from '../../utils/http'

http()

const Http = (props) => {

    console.log(props)
    return (
        <h2>
            this is http utils
        </h2>
    )
}

export default Http

