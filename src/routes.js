import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/home/Home.js';
import About from './Components/about/About.js';
import Mysteries from './Components/mysteries/Mysteries.js';
import Ded from './Components/ded/Ded.js';
import Login from './Components/login/Login.js';
import Account from './Components/account/Account.js';
import Contact from './Components/contact/Contact.js';
import FAQ from './Components/FAQ/Faq.js';

export default(
    <HashRouter>
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path ='/about' component = { About } />
            <Route path = '/mysteries' component = { Mysteries } />
            <Route path = '/ded' component = { Ded } />
            <Route path = '/login' component = { Login } />
            <Route path = '/account' component = { Account } />
            <Route path = '/contact' component = { Contact } />
            <Route path = '/faq' component = { FAQ } />
        </Switch>
    </HashRouter>
)