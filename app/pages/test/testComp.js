import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import Panel from 'components/panel'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd'



@connect(
    (state, props) => ({
      config: state.config,
    })
)

export default class popCheck extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      show: false
    }
  }

  componentDidMount() {
  }


  handleClick(ctx) {
      
      console.log(this.state)
      if (this.state.show) {
        this.state.show = false
      } else {
          this.state.show = true
      }
      
      console.log(this.state)

      let state = this.state

      this.setState({
          show: state.show
      })
  }
  
  render() {
    let state = this.state
    return (
      <div>
        {
            state.show?<p>this is test P</p>: null
        }
        <Button onClick={this.handleClick.bind(this)}>点击按钮test1</Button>
      </div>
    )
  }
}
