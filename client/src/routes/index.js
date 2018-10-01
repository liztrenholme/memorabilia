import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hi from '../components/hi';
import Contact from '../components/contact';
import Featured from '../components/featured';
import Customers from '../components/customers';
import Search from '../components/search';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/hi" exact component={Hi} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Featured} />
            <Route path="/customers" exact component={Customers} />
            <Route path="?" component={Search} />
        </Switch>
    </BrowserRouter>
);