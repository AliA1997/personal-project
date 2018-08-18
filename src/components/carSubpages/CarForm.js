import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { chgCarState } from '../../redux/reducers/cars_reducers';
import placeholderImage from '../../imgs/placeholder.jpg';
class CarForm extends Component {
    constructor() {
        super();
        this.state = {
            imageurl: ''
        }
    }
    createPosting(e) {
        e.preventDefault();
        const { id, type, make, model, year, odometer, location, price, description, username, expiration_date } = this.props;
        console.log('Year------------', year)
        console.log('------------id', id);
        const { imageurl } = this.state;
        console.log({id, type, make, model, year, odometer, location, price, imageurl, username, description, expiration_date});
        axios.post(`/api/${+id}/cars`, { make, model, year, odometer, location, type, price, imageurl, username , description, expiration_date}).then(res =>{
            console.log(res.data.newCar)
            this.props.history.push('dashboard');
        }).catch(err => console.log("Axios Post Error-------------", err));
    }

    imageUpload(file) {
        let fileToUpload = file[0];
        console.log('files-------------------', file[0]);
        axios.get('/api/upload')
        .then(res => {
            let formData = new FormData();
            formData.append('signature', res.data.signature);
            formData.append('api_key', process.env.REACT_APP_CLOUDINARY_CLIENT_KEY);
            formData.append('timestamp', res.data.timestamp);
            formData.append('file', fileToUpload);
            axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
            .then(res => {
                this.setState({imageurl: res.data.secure_url});
            }).catch(err => console.log('CLOUDINARY DATABASE POst error---------------', err));
        }).catch(err => console.log('Axios Upload Error--------------', err));
    }

    render() {
        const { locations, years, name } = this.props;
        const { chgCarState } = this.props;
        const { imageurl } = this.state;
        return (
            <div className='create-car-form'>
                <form onSubmit={e => this.createPosting(e)}>
                    <img src={imageurl || placeholderImage} 
                    height='300' alt={`${name} this is your car!!.`} />
                    <br/>
                    <label>Car Image</label>
                    <br/>
                    <input type='file' name='Car Image' onChange={e => this.imageUpload(e.target.files)} />
                    <br/>
                    <label>Type</label>
                    <br/>
                    <select onChange={e => chgCarState(e, 'car_type', e.target.value)}>
                        <option key={0} value={null}></option>                    
                        <option key={1} value='coupe'>Coupe</option>
                        <option key={2} value='sedan'>Sedan</option>
                        <option key={3} value='suv'>Suv</option>
                        <option key={4} value='truck'>Truck</option>                
                        <option key={5} value='truck'>Van</option>     
                    </select>  
                    <br/>
                    <label>Starting Price</label>
                    <br/>
                    <input onChange={e => chgCarState(e, 'price', e.target.value)} type='number' required />
                    <br/>
                    <label>Bid Expires?</label>
                    <br/>
                    <input onChange={e => chgCarState(e, 'expiration_date', e.target.value)} type='number' required />
                    <br/>            
                    <label>Make</label>
                    <br/>
                    <input onChange={e => chgCarState(e, 'make', e.target.value)} required/>
                    <br/>
                    <label>Model</label>
                    <br/>
                    <input onChange={e => chgCarState(e, 'model', e.target.value)} required/>
                    <br/>
                    <label>Year</label>
                    <select onChange={e => chgCarState(e, 'year', e.target.value)}>
                        {years.map((y, i) => <option key={i} value={y}>{y}</option>)}
                    </select>
                    <br/>
                    <label>Miles</label>
                    <br/>
                    <input onChange={e => chgCarState(e, 'miles', e.target.value)} type='number' required/>
                    <br/>
                    <label>Location</label>
                    <select onChange={e => chgCarState(e, 'location', e.target.value)}>
                        <option key={0} value={null} selected></option>                        
                        {locations.map((l, i) => <option key={i} value={l}>{l}</option>)}
                    </select>
                    <br/>
                    <label>Description</label>
                    <br/>
                    <textarea className='description-textarea' placeholder='Enter your description minimum 150 characters' 
                    onChange={e => chgCarState(e, 'description', e.target.value)}>
                    </textarea>
                    <br/>
                    <button type='submit'>Create Vehicle Listing</button>
                </form>
            </div>
            );
    }
}

const mapStateToProps = state => {
    return {
        locations: state.car.locations,
        years: state.car.years,
        type: state.car.car.type,
        make: state.car.car.make,
        model: state.car.car.model,
        year: state.car.car.year,
        description: state.car.car.description,
        expiration_date: state.car.car.expiration_date,
        price: state.car.car.price,
        location: state.car.car.location,
        odometer: state.car.car.odometer,
        id: state.user.account.id, 
        username: state.user.account.username,
        name: state.user.account.name
    };
}

const mapDispatchToProps = {
    chgCarState,
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarForm));