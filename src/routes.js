import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfilePage from './components/userSubpages/ProfilePage';
import DeleteProfile from './components/userSubpages/DeleteProfile';
import Register from './components/userSubpages/Register';
import CarForm from './components/carSubpages/CarForm';
import CarPage from './components/carSubpages/CarPage';
import StatePage from './components/carSubpages/StatePage';
import ArbitrationPage from './components/servicesSubpages/ArbitrationPage';
import CRMap from './components/servicesSubpages/CRMap';
import UniqueVehicles from './components/servicesSubpages/UniqueVehicles';
//Main Components.
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Locations from './components/Locations';
import SchedulePage from './components/SchedulePage';
import Services from './components/Services';


const routes = (
    <div>
        <Switch>
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/profile/:id' component={ProfilePage} />
            <Route path='/profile/:id/delete_profile' component={DeleteProfile} />  
            <Route exact path='/' component={Home} />
            <Route path='/create_posting' component={CarForm} />
            <Route exact path='/inventory' component={Inventory} />
            <Route exact path='/inventory/:state' component={StatePage} />
            <Route path='/inventory/:state/:id' component={CarPage} />
            <Route exact path='/sales_schedule' component={SchedulePage} />
            <Route path='/sales_schedule/:state' component={SchedulePage} />
            <Route path='/locations' component={Locations} />
            <Route exact path='/services' component={Services} />
            <Route path='/services/condition_reporting' component={CRMap} />
            <Route path='/services/unique_vehicles' component={UniqueVehicles} />
            <Route path='/services/arbitration' component={ArbitrationPage} />                        
            <Route path='/dashboard' component={Dashboard} />         
        </Switch>
    </div>
)

export default routes;