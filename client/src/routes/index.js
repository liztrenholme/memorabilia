import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hi from '../components/hi';
import Contact from '../components/contact';
import Featured from '../components/featured';
import Customers from '../components/customers';
import Search from '../components/search';
import Admin from '../components/admin';
// import Auth from './login';
import Login from '../components/adminLogin';
import Register from '../components/register';

export default () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/hi" exact component={Hi} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/" exact component={Featured} />
                <Route path="/customers" exact component={Customers} />
                <Route path="?" component={Search} />
                <Route path="/admin" component={Login} />
                {/* <Route path='/login' component={Login} /> */}
                <Route path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    </div>
);