import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Sales from './components/Sales';
import Dashboard from './components/Dashboard';
import Locations from './components/Locations';
import Services from './components/Services';
import Register from './components/subPages/Register';
import CarForm from './components/subPages/CarForm';

const routes = (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/create_posting' component={CarForm} />
        <Route path='/inventory' component={Sales} />
        <Route path='/sales_schedule' component={Sales} />
        <Route path='/event_sales' component={Sales} />        
        <Route path='/locations' component={Locations} />
        <Route path='/services' component={Services} />
        <Route path='/dashboard' component={Dashboard} />        
    </Switch>        
);
export default routes;