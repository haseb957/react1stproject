import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './landingpage';
import Aboutme from './aboutme';
import Contact from './contactme';
import Project from './project';
import Resume from './resume';

const Main = ()=>(
    <Switch>
        <Route exact path ="/" component={Landing}/>
        <Route exact path ="/aboutme" component={Aboutme}/>
        <Route exact path ="/Contact" component={Contact}/>
        <Route exact path ="/Project" component={Project}/>
        <Route exact path ="/resume" component={Resume}/>
    </Switch>
)
export default Main;