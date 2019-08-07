import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { Route, Switch, HashRouter } from 'react-router-dom';

import reducers from './reducers';
import Home from './components/home';
import Profile from './components/profile';
import Skill from './components/skill';
import Portfolio from './components/portfolio';
import Service from './components/service';
import Contact from './components/contact';
import Navbar from './components/navbar';


const store = createStore(reducers, applyMiddleware(promise, thunk));

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { cartCount : 0 }
    }

    render() {
        return (
            <Provider store={store}>
                <HashRouter>               
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/skill' component={Skill} />
                        <Route exact path='/portfolio' component={Portfolio} />
                        <Route exact path='/service' component={Service} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}