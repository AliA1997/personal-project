import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }
    render() {
        return (
            <div>
                <div className='logo-div'>
                    <span><img height='100' width='100' src={logo} alt='munther logo'/></span>
                </div>
                <nav className='main-nav'>
                    <div className='link-pane'><Link to='/inventory'>Buy</Link></div>
                    <div className='link-pane'><Link to='/sales_schedule'>Sell</Link></div>
                    <div className='link-pane'><Link to='/services'>Services</Link></div>                    
                    <div className='link-pane'><Link to='/dashboard'>My Dashboard</Link></div>
                    <div className='link-pane'><Link to='/locations'>Locations</Link></div>                    
                </nav>
            </div>
        );
    }
}

export default Nav;