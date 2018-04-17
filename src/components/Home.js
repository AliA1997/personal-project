import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { chgState } from '../redux/reducer';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    userLogin() {
        const { username, password } = this.props;
        axios.post('/api/login', { username, password }).then(res => {
            console.log(res);
        })
        window.location.reload();
    }
    render() {
        const {loggedIn, chgState} = this.props;
        return (
            <div>
                <div className='login-view' style={{'display': loggedIn ? 'none' : 'inline-block'}}>
                    <form onSubmit={e => this.userLogin()}>
                        <input type='text' onChange={e => chgState(e, 'username', e.target.value)} />
                        <input type='text' onChange={e => chgState(e, 'password', e.target.value)} />                
                        <button type='submit'>Login</button>
                    </form>
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

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    chgState,
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);