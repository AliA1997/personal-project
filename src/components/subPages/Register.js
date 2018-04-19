import React, {Component} from 'react';
import { connect } from 'react-redux';
import { chgUserState } from '../../redux/reducer';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            isRadioChecked: false,
        }
        this.register = this.register.bind(this);
    }
    logout(e) {
        axios.post('/api/logout').then(res => {
            console.log(res.data.message);
        });
    }
    register(e) {
        e.preventDefault();
        this.logout();
        const {name, type, dealer, username, email, password, imageurl, phone_number, company_name} = this.props.account;
        axios.post('/api/register', {name, type, username, email, dealer, password, imageurl, phone_number, company_name}).then(res => {
            console.log(res.data.user);
        }).catch(err => console.log(err));
        window.location.reload();
    }
    render() {

        const { chgUserState } = this.props;
        return (
            <div>
                <form onSubmit={e => this.register(e)}>
                    {/* <img className='profile-image' src='http://https.cat/200' alt={name} /> */}
                    <label>Profile Image</label>
                    <input  autoComplete="off" onChange={e => chgUserState(e, 'image', e.target.value)}/>
                    <label>Name</label>
                    <input autoComplete="name" onChange={e => chgUserState(e, 'name', e.target.value)}/>
                    <label>Company Name</label>
                    <input autoComplete="organization" onChange={e => chgUserState(e, 'company', e.target.value)} />
                    <h4>Dealer?</h4>
                    <select passive="on" onChange={e => chgUserState(e, 'dealer', e.target.value)} >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <h4>Type</h4>
                    <label>Buyer</label>
                    <input type='radio' value='buyer' clicked='false' onChange={e => chgUserState(e, 'type', e.target.value)} />
                    <label>Seller</label>                    
                    <input type='radio' value='dealer' clicked='false' onChange={e => chgUserState(e, 'type', e.target.value)} />                    
                    <label>Email</label>
                    <input autoComplete="email" onChange={e => chgUserState(e, 'email', e.target.value)}/>
                    <label>Phone Number</label>
                    <input autoComplete="tel" onChange={e => chgUserState(e, 'phone_number', e.target.value)}/>
                    <label>Username</label>
                    <input autoComplete="name" onChange={e => chgUserState(e, 'username', e.target.value)}/>
                    <label>Password</label>
                    <input autoComplete="off" onChange={e => chgUserState(e, 'password', e.target.value)}/>
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
    chgUserState
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);