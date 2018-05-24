import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import style from '../assets/less/index.less'
import styleMain from '../assets/less/main.less'

import Index from '../pages/index'
import Icons from '../pages/icon'

const Home = (props) => (
    <div className="router">
        this is home pages
        <i className="icon icon-appreciate"></i>
        <i className="icon icon-check"></i>
    </div>
)

const Roster = (props) => (
    <div className="router">
        this is index pages
        <li> <Link to={'/msg/123'}> msg </Link></li>
    </div>
)

const Schedule = Index

const Number = (props) => (
    <div className="router">
        this is Number pages and this is my prama id : {props.match.params.id}
    </div>
)

const Icon = Icons

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/index' component={Roster}/>
        <Route path='/my' component={Schedule}/>
            <Route path='/msg/:id' component={Number}/>
        <Route path='/icon' component={Icon}/>
    </Switch>
  </main>
)

export default Main