import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { chgUserState, userLogin } from '../../redux/reducer';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,

        }
    }
    componentDidMount() {
        const { userLogin } = this.props;
        axios.get('/api/user-data').then(res => {
            if(res.data.user !== undefined) {
                this.setState({loggedIn: true});
                userLogin(res.data.user[0]);
                window.location = `http://localhost:${window.location.port}/#/dashboard`;
            } else {
                // window.location =  `http://localhost:${window.location.port}/#/`;
                this.setState({loggedIn: false});
            }
        })
    }
    login() {
        const { userLogin } = this.props;
        const { username, password } = this.props.account;
        axios.post('/api/login', { username, password }).then(res => {
            if(res.data.user[0]) {
                userLogin(res.data.user[0]);
                this.setState({loggedIn: true});
            }
        })
    }
    logout(e) {

        axios.post('/api/logout').then(res => {
            console.log(res.data.message);
        })
    }
    render() {
        //chgUserState <-- Method in reducer.
        //currentUser <-- state in reducer.
        const { chgUserState, currentUser } = this.props;
        const { loggedIn } = this.state;
        return (
            <div>
                <div className='login-view' style={{'display': loggedIn ? 'none' : 'inline-block'}}>
                    <form onSubmit={e => this.login()}>
                        <input type='text' onChange={e => chgUserState(e, 'username', e.target.value)} />
                        <input type='text' onChange={e => chgUserState(e, 'password', e.target.value)} />                
                        <button type='submit'>Login</button>

                    </form>
                </div>
                <div className='welcome-pane' style={{'display': loggedIn ? 'inline-block' : 'none'}}>
                    <h1>Welcome {currentUser.username}</h1>
                    <button onClick={this.logout}>Logout</button>
                </div>
                <div className='general-view' style={{'display': loggedIn ? 'inline-block' : 'none'}}>
                    <h3>Locations</h3>
                    <ul>
                        <li><Link to={`/inventory/ca`}>California</Link></li>
                        <li><Link to={`/inventory/nv`}>Nevada</Link></li>
                        <li><Link to={`/inventory/az`}>Arizona</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    chgUserState,
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);