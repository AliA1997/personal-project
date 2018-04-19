import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { chgCarState } from '../../redux/reducer';


class Car extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
        }
    }
    editPost(e) {
       this.setState({edit: true});
    }
    fulfillEdit(e) {
        if(window.confirm('You sure you want to edit this posting!')) {
            axios.patch(`/api/${this.props.user_id}/cars/${this.props.id}`).then(res => {
                console.log(res.data.updatedCar);
            })
            this.setState({edit: false});
        }
     }
    deletePost(e) {
        e.preventDefault();
        if(window.confirm('You sure you want to delete this posting forever!!!!!?')) {
            axios.delete(`/api/${this.props.user_id}/cars/${this.props.id}`).then(res => {
                console.log(res.data.message);
            })
        }
    }
    render() {
        const { edit } = this.state;
        return (
            <div>
                <div>
                    <h6>{this.props.make}</h6>
                    <h5>{this.props.model}</h5>
                    <button onClick={e => this.deletePost(e)}>Delete</button>
                    <button onClick={e => this.editPost(e)}>Edit</button>
                </div>
                <div className='edit-car-pane' style={{'display': edit ? 'inline-block' : 'none'}}>
                    <select value={this.props.type} onChange={e => chgCarState(e, 'car_type', e.target.value)}>
                        <option value='coupe'>Coupe</option>
                        <option value='sedan'>Sedan</option>
                        <option value='suv'>Suv</option>
                        <option value='truck'>Truck</option>                
                        <option value='truck'>Van</option>     
                    </select>  
                    <label>Starting Price</label>
                    <select value={this.props.price} onChange={e => chgCarState(e, 'price', e.target.value)}>
                        {this.props.prices.map((p, i) => <option key={i}>{p}</option>)}
                    </select>         
                    <label>Make</label>
                    <input value={this.props.make} onChange={e => chgCarState(e, 'make', e.target.value)}/>
                    <label>Model</label>
                    <input value={this.props.model} onChange={e => chgCarState(e, 'model', e.target.value)}/>
                    <label>Year</label>
                    <select value={this.props.year} onChange={e => chgCarState(e, 'year', e.target.value)}>
                        {this.props.years.map((y, i) => <option key={i} value={y}>{y}</option>)}    
                    </select>
                    <label>Miles</label>
                    <input value={this.props.odometer} onChange={e => chgCarState(e, 'miles', e.target.value)}/>
                    <label>Location</label>
                    <select value={this.props.location} onChange={e => chgCarState(e, 'location', e.target.value)}>
                        {this.props.locations.map((l, i) => <option key={i}>{l}</option>)}
                    </select>                
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Car);