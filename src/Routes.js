import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Guide from './Components/Guide/Guide'
import Build from './Components/Build/Build'
import List from './Components/List/List'
import Comp_case from './Components/PC_components/Comp_Case/Comp_case'

export default(
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/list' component={List}/>
    <Route path='/guide' component={Guide}/>
    <Route path='/build' component={Build}/>
    <Route path='/comp-case' component={Comp_case}/>
  </Switch>
)