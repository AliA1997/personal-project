import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { chgUserState, chgAddressState, userLogin } from '../../redux/reducers/user_reducers';
// import Dropzone from 'react-dropzone';
import Checkout from '../subComponents/Checkout';
import axios from 'axios';
import defaultPicture from '../../imgs/default-profile-picture.png';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            imgClicked: false,
            imageurl: '',
        }
    }
    logout(e) {
        axios.post('/api/logout').then(res => {
            console.log(res.data.message);
        });
    }

    register = () => {
        //Racy issues when dealing with asynchronous code.
        // console.log(this.props.account)
        const { imageurl } = this.state;
        console.log('this.state----------------', this.state);
        const {name, dealer, username, email, password, phone_number, company_name, address, zipcode, city, state, country} = this.props;
        console.log(address, zipcode, city, state, country)
        setTimeout(() => {
            axios.post('/api/register', {name, username, email, dealer, password, imageurl, phone_number, company_name, address, zipcode, city, state, country}).then(res => {
                userLogin(this.props.account);
                alert('Successfully Registered');
                this.props.history.push('dashboard');
            }).catch(err => console.log('Register Error----------', err));
        }, 100)
    }

    uploadImage(files) {
        let fileToUpload = files[0];
        console.log('File---------------------', files[0]);
         // Initial FormData
         console.log('cloudinary api---------', process.env.REACT_APP_CLOUDINARY_CLIENT_KEY);
         console.log('cloudinary url------------', process.env.REACT_APP_CLOUDINARY_URL);
         axios.get('/api/upload')
         .then(res => {
            let formData = new FormData();
            console.log('res.data----------------------', res.data);
            formData.append("signature", res.data.signature)
            formData.append("api_key", process.env.REACT_APP_CLOUDINARY_CLIENT_KEY);
            formData.append("timestamp", res.data.timestamp)
            formData.append("file", fileToUpload);
            // console.log('FOrmData--------------', formData);
            for(var pair of formData.entries()) {
                console.log(pair); 
             }
            axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
            .then( res => {
                // console.log('imageurl-----------', res.data.secure_url)
                this.setState({imageurl: res.data.secure_url});
            }).catch(err => console.log('Image Upload Endpoint Error---------', err));
        }).catch(err => console.log('Upload Image Endpoint Error----------', err));
    }

    render() {
        const { name, email, username, states, chgUserState, chgAddressState } = this.props;
        console.log('username---------------------', username);
        // console.log('states---------------', states);
        const { imageurl } = this.state;
        return (
            <div className='register-view'>
                <form>
                    <label>Profile Image</label><br/>
                    <img src={imageurl || defaultPicture} alt={`${username} image!`} />
                    <input type='file' name='Profile Picture' onChange={e => this.uploadImage(e.target.files)} />
                    <br/>
                    <label>Name</label>
                    <br/>
                    <input autoComplete="name" min='4' onChange={e => chgUserState(e, 'name', e.target.value)} required/>
                    <br/>
                    <label>Company Name</label>
                    <br/>
                    <input autoComplete="organization" onChange={e => chgUserState(e, 'company', e.target.value)} />
                    <h4>Dealer?</h4>
                    <select className='select-input' passive="on" onChange={e => chgUserState(e, 'dealer', e.target.value)} required>
                        <option value={null} selected></option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input autoComplete="email" type='email' onChange={e => chgUserState(e, 'email', e.target.value)} required/>
                    <br/>
                    <label>Phone Number</label>
                    <br/>
                    <input autoComplete="tel" min='9' onChange={e => chgUserState(e, 'phone_number', e.target.value)} required/>
                    <br/>
                    <label>Username</label>
                    <br/>                    
                    <input autoComplete="name" min='4' onChange={e => chgUserState(e, 'username', e.target.value)} required/>
                    <br/>
                    <label>Password</label>
                    <br/>                    
                    <input autoComplete="off" type='password' min='8' onChange={e => chgUserState(e, 'password', e.target.value)} required/>
                    <br/>
                    <div className='address-header'><h3>Address Info</h3></div>
                    <div className='address-zipcode-info'>
                        <label>Address</label>
                        <br className='address-info-break'/>
                        <input autoComplete="address" className='address-input' onChange={e => chgAddressState(e, 'address', e.target.value)} required/>
                        <br />
                        <label>Zipcode</label>
                        <br/>
                        <input autoComplete="zipcode" 
                        className='zipcode-input' onChange={e => chgAddressState(e, 'zipcode', e.target.value)} required/>      
                    </div>              
                    <br/>
                    <div className='desktop-address-view'>
                         <label>City</label>
                        <br className='address-info-break'/>
                        <input autoComplete="city" className='city-input' onChange={e => chgAddressState(e, 'city', e.target.value)} required/>
                        <br className='address-info-break'/>
                        <label>State</label>
                        <br className='address-info-break'/>
                        <input list='states' className='state-select' 
                        onChange={e => chgAddressState(e, 'state', e.target.value)} required/>
                        <datalist id='states'>
                            {states && states.map((state, i) => <option key={i}>{state}</option>)}
                        </datalist>
                        <br className='address-info-break'/>
                        <label>Country</label>
                        <br className='address-info-break'/>
                        <input autoComplete="country" className='country-input' value={'USA'} onChange={e => chgAddressState(e, 'country', e.target.value)} required/>
                        <br/>    `            
                    </div> 
                    <p>Please Put Test Card Number 4242 4242 4242 4242 as Card Number so you would not be charged.</p> 
                    <Checkout 
                        name={name}
                        description='Register!!!'
                        email={email}
                        amount={25}
                        register={this.register}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.user,
        dealer: state.user.account.dealer,
        password: state.user.account.password,
        name: state.user.account.name,
        username: state.user.account.username,
        email: state.user.account.email,
        company_name: state.user.account.company_name,
        phone_number: state.user.account.phone_number,
        country: state.user.account.country,
        state: state.user.account.state,
        city: state.user.account.city,
        address: state.user.account.address,
        zipcode: state.user.account.zipcode,
        states: state.user.states
    };
}

const mapDispatchToProps = {
    chgUserState, 
    chgAddressState,
    userLogin
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));