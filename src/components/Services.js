import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3>Services</h3>
                <div className='mobile-view'>
                    <h6><Link className='link' to='/services/condition_reporting'>Condition Reporting</Link></h6><br/>
                    <h6><Link className='link' to='/services/unique_vehicles'>Unique Vehicles</Link></h6><br/>
                    <h6><Link className='link' to='/services/arbitration'>Arbitration</Link></h6><br/>
                </div>
                <div className='desktop-view'>
                    <h6><Link className='link' to='/services/condition_reporting'>Condition Reporting</Link></h6><br/>
                    <h6><Link className='link' to='/services/unique_vehicles'>Unique Vehicles</Link></h6><br/>
                    <h6><Link className='link' to='/services/arbitration'>Arbitration</Link></h6><br/>
                </div>
            </div>
        )
    }
}

export default Services;