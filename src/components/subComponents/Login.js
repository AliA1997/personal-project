import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { chgUserState, userLogin, userLogout } from '../../redux/reducers/user_reducers';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { ENGINE_METHOD_DIGESTS } from 'constants';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loading: true 
        }
    }
    componentDidMount() {
        const { user } = this.props;
        const { account } = user;
            axios.get('/api/user-data').then(res => {
                if(res.data.user) {
                    const { userLogin } = this.props;
                    userLogin(res.data.user[0]);
                    console.log('Login response data----', res.data.user[0]);
                    console.log('Login account data-------', account);
                    this.props.loginProp();
                } 
                this.setState({loading: false});
            }).catch(err => console.log('User Data Axios Error----------', err));
    }
    login(e) {
        e.preventDefault();
        this.setState({clickedButton: true});
        const { userLogin } = this.props;
        const { username, password } = this.props.user.account;
            axios.post('/api/login', { username, password }).then(res => {
                if(res.data.user) {
                    console.log('Data-------', res.data.user);
                    userLogin(res.data.user);
                    this.props.loginProp();
                    alert('Login successful');
                } else {
                    alert('Error login not valid!!');
                }
            })
        }
    logout(e) {
        const { userLogout } = this.props;
        e.preventDefault();
        axios.post('/api/logout').then(res => {
            console.log(res.data.message);
            userLogout();
        })        
        this.props.logoutProp(e);
    }

    render() {
        //chgUserState <-- Method in reducer.
        const { chgUserState } = this.props;
        const { account, isLoggedIn } = this.props.user; 
        const { loading } = this.state;
        console.log('------AccountData', account);
        if(!loading) {
            return (
                <div className='login-div'>
                    <div className='login-view' style={{display: account.email.length ? 'none' : 'flex'}}>
                        <form onSubmit={e => this.login(e)}>
                            <label>Username</label>
                            <br/>
                            <input type='text' 
                            autoComplete='name'
                            min='8'
                            onChange={e => chgUserState(e, 'username', e.target.value)} required/>
                            <br/>
                            <label>Password</label>
                            <br/>
                            <input autoComplete='password' type='password' min='8' onChange={e => chgUserState(e, 'password', e.target.value)} required/><br/>               
                            <button type='submit'>Login</button>
                            <h5 className='register-text'>Already have an account?</h5>
                            <h3 className='register-link'><Link className='register-link' to='/register'>Register Here.</Link></h3>
                        </form>
                    </div>
                    <div className='welcome-pane' style={{display: (!account.email.length) ? 'none' : 'inline-block'}}>
                        <div className='loggedIn-header'>
                            <h3 >{account && `Welcome ${account.username}`}</h3>
                        </div>
                        <br/>
                        <button onClick={e => this.logout(e)}>Logout</button>
                    </div>
                </div>
            )
        } else {
            return <Loader />
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        car: state.car
    }
}

const mapDispatchToProps = {
    chgUserState,
    userLogin,
    userLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);