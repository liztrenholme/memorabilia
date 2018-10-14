import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hi from '../components/hi';
import Contact from '../components/contact';
import Featured from '../components/featured';
import Customers from '../components/customers';
import Search from '../components/search';
import Admin from '../components/admin';
import Auth from './login';

export default () => (
    <div>
    <BrowserRouter>
        <Switch>
            <Route path="/hi" exact component={Hi} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Featured} />
            <Route path="/customers" exact component={Customers} />
            <Route path="?" component={Search} />
            <Route path="/admin" component={Auth} />
        </Switch>
    </BrowserRouter>
    </div>
);