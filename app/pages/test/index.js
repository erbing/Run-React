import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import Panel from 'components/panel'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd'


import Sub from './sub'

@connect(
    (state, props) => ({
      config: state.config,
    })
)

export default class popCheck extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      show: true
    }
  }

componentDidMount() {
}



  
  render() {
    return (
      <Panel>
        测试
        <Sub/>
      </Panel>
    )
  }
}
