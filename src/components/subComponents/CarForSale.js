import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarForSale extends Component {
    constructor() {
        super();
        this.state = {
            car: '',
        }
    }
    render() {
        let state = this.props.location.split('').splice(this.props.location.length - 2).join('');
        return (
            <div className='listing-container'>
                <div className='listing-box'>
                    <div>
                        <img src={this.props.imageurl || 'https://www.happyceliac.com/wp-content/uploads/2018/02/placeholder-image.png'} 
                        alt={`${this.props.year} ${this.props.make} ${this.props.model}`} />
                    </div>
                    <br/>
                    <div>
                        <h6>{this.props.make}</h6>
                        <h5>{this.props.model}</h5>
                        <h5>Year: {this.props.year}</h5>
                        <h5>Location: {this.props.location} </h5>
                        <button>
                            <Link className='car-link' to={`/inventory/${state}/${this.props.id}`}>
                            See Listing
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarForSale;