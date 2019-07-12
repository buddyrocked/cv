import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';


import Home from './components/home';
import Profile from './components/profile';
import Skill from './components/skill';

import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { cartCount : 0 }
    }

    render() {
        return (
              <>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/skill' component={Skill} />
                    </Switch>
                </HashRouter>
              </>
        );
    }
}