import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { chgCarState, clearState } from '../../redux/reducers/cars_reducers';
import placeholderImage from '../../imgs/placeholder.jpg';

class SellerCar extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
        }
    }
    editPost(e) {
       this.setState({edit: !this.state.edit});
    }
    fulfillEdit(e) {
        const { type, year, make, model, odometer, location, price} = this.props.car;
        console.log( { type, year, make, model, odometer, location, price});
        if(window.confirm('You sure you want to edit this posting!')) {
            axios.put(`/api/${this.props.user_id}/cars/${this.props.id}`, 
            {type, year, make, model, odometer, location, price}).then(res => {
                console.log(res.data.updatedCar);
            }).catch(err => console.log('Axios PUt Error--------------', err));
            this.props.clearState(this.props.car);
            this.setState({edit: false});
        }
     }
    deletePost(e) {
        e.preventDefault();
        if(window.confirm('You sure you want to delete this posting forever!!!!!?')) {
            axios.delete(`/api/${this.props.user_id}/cars/${this.props.id}`).then(res => {
                console.log(res.data.message);
            }).catch(err => console.log('Axios Delete Error--------------', err));
        }
    }
    render() {
        const { edit } = this.state;
        const { years, locations } = this.props.car;
        const { chgCarState } = this.props;
        console.log(this.props.price);
        const { type, year, make, model, odometer, location, price } = this.props.car;
        return (
            <div>
                <div>
                    <img src={this.props.imagurl || placeholderImage} 
                    alt={`${this.props.year} ${this.props.make} ${this.props.model}`}/>
                    <h6>{this.props.make}</h6>
                    <h5>{this.props.model}</h5>
                    <h5>Year: {this.props.year}</h5>
                    <h5>Location: {this.props.location}</h5>
                    <h5>Price: {this.props.price}</h5>
                    <button onClick={e => this.deletePost(e)}>Delete</button>
                    <button onClick={e => this.editPost(e)}>Edit</button>
                </div>
                <div className='edit-car-pane' style={{'display': edit ? 'inline-block' : 'none'}}>
                    <br/>
                    <select onChange={e => chgCarState(e, 'car_type', e.target.value)}>
                        <option value='coupe' selected={type === 'coupe'? 'selected' : ''}>Coupe</option>
                        <option value='sedan' selected={type === 'sedan' ? 'selected' : ''}>Sedan</option>
                        <option value='suv' selected={type === 'suv' ? 'selected' : ''}>Suv</option>
                        <option value='truck' selected={type === 'truck' ? 'selected' : ''}>Truck</option>                
                        <option value='van' selected={type === 'van' ? 'selected' : ''}>Van</option>     
                    </select>
                    <br/>  
                    <label>Starting Price</label>
                    <br/>
                    <input placeholder={price} onChange={e => chgCarState(e, 'price', e.target.value)} type='number' />
                    <br/>
                    <label>Make</label>
                    <br/>
                    <input placeholder={make} onChange={e => chgCarState(e, 'make', e.target.value)}/>
                    <br/>
                    <label>Model</label>
                    <br/>
                    <input placeholder={model} onChange={e => chgCarState(e, 'model', e.target.value)}/>
                    <br/>
                    <label>Year</label>
                    <br/>
                    <select onChange={e => chgCarState(e, 'year', e.target.value)}>
                        {years.map((y, i) => <option key={i} 
                        value={y} 
                        selected={year === y ? 'selected' : ''}>{y}</option>)}
                    </select>
                    <br/>
                    <label>Miles</label>
                    <br/>
                    <input placeholder={odometer} onChange={e => chgCarState(e, 'miles', e.target.value)}/>
                    <br />
                    <label>Location</label>
                    <br/>
                    <select onChange={e => chgCarState(e, 'location', e.target.value)}>
                        {locations.map((l, i) => <option key={i} 
                        value={l} 
                        selected={location === l ? 'selected' : ''}>
                        {l}</option>)}
                    </select>                
                    <br/>
                    <button onClick={e => this.fulfillEdit(e)}>Edit this Posting</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    chgCarState,
    clearState
}

export default connect(mapStateToProps, mapDispatchToProps)(SellerCar);