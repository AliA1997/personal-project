import React, {Component} from 'react';
import { connect } from 'react-redux';
import { chgState } from '../../redux/reducer';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            isRadioChecked: false,
        }
    }
    register() {
        const {name, type, username, email, password} = this.props;  
        axios.post('/api/register', {name, type, username, email, password}).then(users => {
            console.log(users);
        })
        window.location.reload();
    }
    render() {
        const {name, type, username, email, password} = this.props;

        const { chgState } = this.props;
        return (
            <div>
                <form onSubmit={e => this.register()}>
                    <label>Name</label>
                    <input  onChange={e => chgState(e, 'name', e.target.value)}/>
                    <h4>Type</h4>
                    <label>Buyer</label>
                    <input type='radio' value='buyer' clicked='false' onChange={e => chgState(e, 'type', e.target.value)} />
                    <label>Seller</label>                    
                    <input type='radio' value='dealer' clicked='false' onChange={e => chgState(e, 'type', e.target.value)} />                    
                    <label>Email</label>
                    <input onChange={e => chgState(e, 'email', e.target.value)}/>
                    <label>Username</label>
                    <input onChange={e => chgState(e, 'username', e.target.value)}/>
                    <label>Password</label>
                    <input  onChange={e => chgState(e, 'password', e.target.value)}/>
                    <button type='submit'>Register</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    chgState
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);