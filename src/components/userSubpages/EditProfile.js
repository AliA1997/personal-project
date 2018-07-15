import React, {Component} from 'react';
import axios from 'axios';
import { chgUserState, chgAddressState, userLogin, userLogout } from '../../redux/reducers/user_reducers';
import { connect } from 'react-redux';

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            editProfile: false,
            editName: false,
            editUsername: false,
            editEmail: false,
            editCompanyName: false,
            editImageurl: false,
            editPhoneNumber: false,
            editDealer: false,
            editAddress: false,
            editZipcode: false,
            editCity: false,
            editState: false,
            editCountry: false
        }
    }
    componentDidMount() {
        const { userLogin, user } = this.props;
        const { account } = user;
        axios.get('/api/user-data').then(res => {
            console.log('Response Data-------',res.data.user);
            console.log('Account Data----', account);
            if(res.data.user) {
                userLogin(res.data.user[0]);
            } else {
                userLogin(res.data.user);
            }
        })
    }

    updateEmail(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, email } = account;
        const inputField = document.getElementById('id-email');
        if(this.state.editEmail && inputField.value) {
            axios.patch(`/api/profile/${id}/email`, { email })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editEmail: false});
                alert(res.data.message);
            }).catch(err => console.log('Update Email Axios Error-------------', err));
        } else {
            this.setState({editEmail: !this.state.editEmail});
        }
    }
    updateName(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, name } = account;
        const inputField = document.getElementById('id-name');
        if(this.state.editName && inputField.value) {
            axios.patch(`/api/profile/${id}/name`, { name })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editName: false});
                alert(res.data.message);
            }).catch(err => console.log('Update Name Axios Error-------------', err));
        } else {
            this.setState({editName: !this.state.editName});
        }
    }
    updateUsername(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, username } = account;
        const inputField = document.getElementById('id-username');
        if(this.state.editUsername && inputField.value) {
            axios.patch(`/api/profile/${id}/username`, { username })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editUsername: false});
                alert(res.data.message);
            }).catch(err => console.log('Update Username Axios Error-------------', err));
        } else {
            this.setState({editUsername: !this.state.editUsername});
        }
    }
    updateImage(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, imageurl } = account;
        const inputField = document.getElementById('id-imageurl');
        if(this.state.editImageurl && inputField.value) {
            axios.patch(`/api/profile/${id}/imageurl`, { imageurl })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editImageurl: false});
                alert(res.data.message);
            }).catch(err => console.log('Update Username Axios Error-------------', err));
        } else {
            this.setState({imageurl: !this.state.editImageurl});
        }
    }
    updateDealer(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, dealer } = account;
        const inputField = document.getElementById('id-dealer');
        if(this.state.editDealer && inputField.value) {
            axios.patch(`/api/profile/${id}/dealer`, { dealer })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editDealer: false});
                alert(res.data.message);
            }).catch(err => console.log('Update Dealer Axios Error-------------', err));
        } else {
            this.setState({editDealer: !this.state.editDealer});
        }
    }
    updatePhoneNumber(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, phone_number } = account;
        const inputField = document.getElementById('id-phone_number');
        if(this.state.editPhoneNumber && inputField.value) {
            axios.patch(`/api/profile/${id}/phone_number`, { phone_number })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editPhoneNumber: false});
                alert(res.data.message);
            }).catch(err => console.log('Update PhoneNumber Axios Error-------------', err)); 
        } else {
            this.setState({editPhoneNumber: !this.state.editPhoneNumber});
        }
    }
    updateCompanyName(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, company_name } = account;
        const inputField = document.getElementById('id-company_name');
        if(this.state.editCompanyName && inputField.value) {
            axios.patch(`/api/profile/${id}/company_name`, { company_name })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editCompanyName: false});
                alert(res.data.message);
            }).catch(err => console.log('Update CompanyName Axios Error-------------', err));
        } else {
            this.setState({editCompanyName: !this.state.editCompanyName});
        }
    }
    updateAddress(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, address } = account;
        const inputField = document.getElementById('id-address');
        if(this.state.editAddress && inputField.value) {
            axios.patch(`/api/profile/${id}/address`, { address })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editAddress: false});
                alert(res.data.message);
            }).catch(err => console.log('Update Address Axios Error-------------', err));
        } else {
            this.setState({editAddress: !this.state.editAddress});
        }
    }
    updateZipcode(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, zipcode } = account;
        const inputField = document.getElementById('id-zipcode');
        if(this.state.editZipcode && inputField.value) {
            axios.patch(`/api/profile/${id}/zipcode`, { zipcode })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editZipcode: false});
                alert(res.data.message);
            }).catch(err => console.log('Update Zipcode Axios Error-------------', err));   
         } else {
             this.setState({editZipcode: !this.state.editZipcode});
         }
    }
    updateState(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { userLogin } = this.props;
        const { id, state } = account;
        const inputField = document.getElementById('id-state');
        if(this.state.editState && inputField.value) {
            axios.patch(`/api/profile/${id}/state`, { state })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editState: false});
                alert(res.data.message);
            }).catch(err => console.log('Update State Axios Error-------------', err));
        } else {
            this.setState({editState: !this.state.editState});
        }
    }
    updateCountry(e) {
        e.preventDefault();
        const { account } = this.props.user;
        const { id, country } = account;
        const inputField = document.getElementById('id-country');
        if(this.state.editCountry && inputField.value) {
            axios.patch(`/api/profile/${id}/country`, { country })
            .then(res => {
                userLogin(res.data.user)
                this.setState({editCountry: false});
                alert(res.data.message);
            }).catch(err => console.log('Update Country Axios Error-------------', err)); 
        } else {
            this.setState({editCountry: !this.state.editCountry});
        }
    }

    render() {
        const {chgUserState, chgAddressState} = this.props;
        console.log(this.props);
        const { username, name, email, imageurl, company_name, phone_number, address, zipcode, dealer, city, state, country } = this.props.user.account;
        const { states } = this.props.user;
        // console.log(zipcode);
        // console.log(city);
        // console.log(state);
        const { editProfile, editName, editUsername, editEmail, editPhoneNumber, editCompanyName, editImageurl, editDealer, editAddressInfo, editAddress, editZipcode, editCity, editState, editCountry } = this.state;
        return (
            <div>
                <header>
                    <h1>Welcome {name}!</h1>
                </header>
                <div className='edit-profile-form'>
                    <div className='img-div'>
                            <img className='profile-image' src={imageurl || 'http://www.phoenixfuels.ph/wp-content/uploads/2018/01/Placeholder.png'} alt={username}/>
                            <br/>
                            <div className={editImageurl ? 'main-div-clicked' : 'main-div'}>
                                <button onClick={(e) => this.updateImage(e)}>
                                    Edit Image Url
                                </button><br/>      
                                <input id='id-imageurl' autoComplete="profileImage" placeholder={imageurl} type='file' style={{'display': editImageurl ? 'inline-block' : 'none', width: '33%'}}/>
                            </div><br/>
                     </div>
                    <form onSubmit={(e) => this.editProfile(e)}>

                        <div className='desktop-div'><span className='edit-profile-spans'>Username</span><h3>{username}</h3></div>
                            <div className={editUsername ? 'main-div-clicked' : 'main-div'}>
                                <button onClick={(e) => this.updateUsername(e)}>
                                    Edit Username
                                </button><br/>
                                <input id='id-username' autoComplete="name" placeholder={username} onChange={e => chgUserState(e, 'username', e.target.value)} style={{'display': editUsername ? 'inline-block' : 'none'}}/>
                            </div><br/>

                            <div className='desktop-div'><span className='edit-profile-spans'>Email</span><h3>{email}</h3></div>
                            <div className={editEmail ? 'main-div-clicked' : 'main-div'}>
                                <button onClick={(e) => this.updateEmail(e)}>
                                    Edit Email
                                </button><br/>
                                <input id='id-email' autoComplete="email" placeholder={email} onChange={e => chgUserState(e, 'email', e.target.value)}  style={{'display': editEmail ? 'inline-block' : 'none'}}/>
                            </div><br/>
                        <div className='desktop-div'><span className='edit-profile-spans'>Name</span><h3>{name}</h3></div>
                        <div className={editName ? 'main-div-clicked' : 'main-div'}>
                            <button onClick={(e) => this.updateName(e)}>
                                Edit Name
                            </button><br />
                            <input id='id-name' autoComplete="name" placeholder={name} onChange={e => chgUserState(e, 'name', e.target.value)} style={{'display': editName ? 'inline-block' : 'none'}}/>
                        </div><br/>
                        <div className='desktop-div'><span className='edit-profile-spans'>Company Name</span><h3>{company_name}</h3></div> 
                            <div className={editCompanyName ? 'main-div-clicked' : 'main-div'}>
                                <button onClick={(e) => this.updateCompanyName(e)}>
                                    Edit Company Name
                                </button><br/>      
                                <input id='id-company_name' autoComplete="organization"  placeholder={company_name} onChange={e => chgUserState(e, 'company', e.target.value)} style={{'display': editCompanyName ? 'inline-block' : 'none'}}/>
                            </div><br/>
                            <div className='desktop-div'><span className='edit-profile-spans'>Phone Number</span><h3>{phone_number}</h3></div>
                            <div className={editPhoneNumber ? 'main-div-clicked' : 'main-div'}>  
                                <button onClick={(e) => this.updatePhoneNumber(e)}>
                                    Edit Phone Number
                                </button><br/>
                                <input id='id-phone_number' autoComplete="tel" placeholder={phone_number} onChange={e => chgUserState(e, 'phone_number', e.target.value)} style={{'display': editPhoneNumber ? 'inline-block' : 'none'}}/>
                            </div><br/>
                        <div className='desktop-div'><span className='edit-profile-spans'>Dealer</span><h3>{dealer}</h3></div>  
                        <div className={editDealer ? 'main-div-clicked' : 'main-div'}>
                            <button onClick={(e) => this.updateDealer(e)}>
                                Edit Dealer
                            </button><br/>   
                            <select id='id-dealer' className='select-input' 
                            passive="on" onChange={e => chgUserState(e, 'dealer', e.target.value)} style={{'display': editDealer ? 'inline-block' : 'none'}}>
                                <option value={null} selected></option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div><br/>
                        <div className='desktop-div'><span className='edit-profile-spans'>Address</span><h3>{address}</h3></div>                         
                        <div className={editAddress ? 'main-div-clicked' : 'main-div'}>
                            <button onClick={(e) => this.updateAddress(e)}>
                                Edit Address
                            </button><br/>
                            {address}
                            <input id='id-address' autoComplete="tel" className='address-input'
                            placeholder={address} onChange={e => chgAddressState(e, 'address', e.target.value)} style={{'display': editAddress ? 'inline-block' : 'none'}}/>
                        </div><br />
                        <div className='desktop-div'><span className='edit-profile-spans'>Zipcode</span><h3>{zipcode}</h3></div>                           
                        <div className={editZipcode ? 'main-div-clicked' : 'main-div'}>
                            <button className='edit-address-button' onClick={e => this.updateZipcode(e)}>
                                Edit Zipcode
                            </button><br/>
                            {zipcode}
                            <br/>                                
                            <input id='id-zipcode' autoComplete="tel" className='zipcode-input'
                            placeholder={zipcode} onChange={e => chgAddressState(e, 'zipcode', e.target.value)} style={{'display': editZipcode ? 'inline-block' : 'none'}}/>
                        </div><br/>
                        <div className='desktop-div'><span className='edit-profile-spans'>City</span><h3>{city}</h3></div>                             
                        <div className={editCity ? 'main-div-clicked' : 'main-div'}>
                            <button onClick={(e) => this.updateCity(e)}>
                                Edit City
                            </button><br/>
                            {city}
                            <br/>                                
                            <input  id='id-city' autoComplete="city" className='city-input'
                            placeholder={city} onChange={e => chgAddressState(e, 'city', e.target.value)} style={{'display': editCity ? 'inline-block' : 'none'}}/>
                        </div><br />
                        <div className='desktop-div'><span className='edit-profile-spans'>State</span><h3>{state}</h3></div>                             
                        <div className={editState ? 'main-div-clicked' : 'main-div'}>
                            <button conClick={e => this.updateState(e)}>
                                Edit State
                            </button>
                            <br/>
                            {state}
                            <br/>                                
                            <select  id='id-state' autoComplete="state" className='state-select' onChange={e => chgAddressState(e, 'state', e.target.value)} required>
                                {states.map((state, i) => <option key={i} value={state}>{state}</option>)}
                            </select>
                        </div><br />
                        <div className='desktop-div'><span className='edit-profile-spans'>Country</span><h3>{country}</h3></div>                           
                        <div className={editCountry ? 'main-div-clicked' : 'main-div'}>
                            <button onClick={(e) => this.updateCountry(e)}>
                                Edit Country
                            </button><br/>
                            {country}
                            <br/>
                            <input  id='id-country' autoComplete="country" className='country-input'
                            placeholder={country} onChange={e => chgAddressState(e, 'country', e.target.value)} style={{'display': editCountry ? 'inline-block' : 'none'}}/>
                        </div><br/>

                        <button type='submit' style={{'display': editProfile ? 'inline-block' : 'none'}}>Save Profile</button>
                    </form>
                    <br/>
                </div>  
                <br/>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    userLogin, 
    userLogout,
    chgUserState,
    chgAddressState
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);