import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  Autocomplete  from 'react-autocomplete';
import logo from '../../logo.png';
import { connect } from 'react-redux';
import { retrieveCars } from '../../redux/reducers/cars_reducers';
import { userLogin } from '../../redux/reducers/user_reducers';
import FaAlignJustify from 'react-icons/lib/fa/align-justify';
import FaSearch from 'react-icons/lib/fa/search';
import './Nav.css';
import axios from 'axios';
import Login from './Login';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            clickedNav: false,
            clickedNavOne: false,
            clickedNavTwo: false,
            clickedNavThree: false,
            clickedNavFour: false,   
            clickedNavFive: false,         
        }
    }
    // componentDidMount() {
    //     const { retrieveCars } = this.props;
    //     axios.get('/api/cars').then(res => {
    //         retrieveCars(res.data.cars);
    //     })
    // }
    componentDidMount() {
        const { account } = this.props.user;
        if(account) {
            this.props.loginProp();
        }
    }
    clicked(nav) {
        switch(nav) {
            case 'nav1':
            this.setState({clickedNavOne: !this.state.clickedNavOne, clickedNavTwo: false, clickedNavThree: false, clickedNavFour: false, clickedNavFive: false});
            break;
            case 'nav2':
            this.setState({clickedNavTwo: !this.state.clickedNavTwo, clickedNavOne: false, clickedNavThree: false, clickedNavFour: false, clickedNavFive: false});
            break;
            case 'nav3':
            this.setState({clickedNavThree: !this.state.clickedNavThree, clickedNavOne: false, clickedNavTwo: false, clickedNavFour: false, clickedNavFive: false});
            break;
            case 'nav4':
            this.setState({clickedNavFour: !this.state.clickedNavFour, clickedNavOne: false, clickedNavTwo: false, clickedNavThree: false, clickedNavFive: false});
            break;
            case 'nav5':
            this.setState({clickedNavFive: !this.state.clickedNavFive, clickedNavOne: false, clickedNavTwo: false, clickedNavThree: false, clickedNavFour: false});
            break;
            default: 
            break;
        }
    }
    render() {
        return (
            <div className='nav-div'>
                <div className='logo-div'>
                    <Link className='logo-link' to='/'><span><img src={logo} alt='munther logo'/></span></Link>
                </div>
                <FaAlignJustify 
                className={this.state.clickedNav ? 'mobile hamburger-icon hamburger-icon-clicked' : 'mobile hamburger-icon'} 
                onClick={() => this.setState({clickedNav: !this.state.clickedNav})} />
                
                <nav className={this.state.clickedNav ? 'desktop main-nav-clicked' : 'desktop main-nav-not-clicked'}>
                    <div className='links'>
                        <div onClick={() => this.clicked('nav1')}
                        className={this.state.clickedNavOne ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/inventory'>Buy</Link>
                        </div>
                        <div onClick={() => this.clicked('nav2')}
                        className={this.state.clickedNavTwo ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/sales_schedule'>Sell</Link>
                        </div>
                        <div  onClick={() => this.clicked('nav3')}
                        className={this.state.clickedNavThree ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/services'>Services</Link>
                        </div>                    
                        <div  onClick={() => this.clicked('nav4')}
                        className={this.state.clickedNavFour ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/dashboard'>My Dashboard</Link>
                        </div>
                        <div  onClick={() => this.clicked('nav5')}
                        className={this.state.clickedNavFive ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/locations'>Locations</Link>
                        </div>                    
                    </div>
                </nav>
                <hr />
                <nav className={this.state.clickedNav ? 'mobile main-nav-clicked' : 'mobile main-nav-not-clicked'}>
                    <div className='links'>
                        <div onClick={() => this.clicked('nav1')}
                        className={this.state.clickedNavOne ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/inventory'>Buy</Link>
                        </div>
                        <div onClick={() => this.clicked('nav2')}
                        className={this.state.clickedNavTwo ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/sales_schedule'>Sell</Link>
                        </div>
                        <div  onClick={() => this.clicked('nav3')}
                        className={this.state.clickedNavThree ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/services'>Services</Link>
                        </div>                    
                        <div  onClick={() => this.clicked('nav4')}
                        className={this.state.clickedNavFour ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/dashboard'>My Dashboard</Link>
                        </div>
                        <div  onClick={() => this.clicked('nav5')}
                        className={this.state.clickedNavFive ? 'clicked-link-pane' : 'link-pane'}>
                            <Link className='link' to='/locations'>Locations</Link>
                        </div>                    
                    </div>
                </nav>
                <Login loginProp={this.props.loginProp} logoutProp={this.props.logoutProp} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    retrieveCars,
    userLogin
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);