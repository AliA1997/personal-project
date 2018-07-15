import React, { Component } from 'react';
import axios from 'axios';
import placeholderImage from '../../imgs/placeholder.jpg';
import Loader from '../subComponents/Loader';
// import StripeCheckout from 'react-stripe-checkout';

// const successPayment = data => {
//     alert('Sucessful Payment!!');
// }

// const errorPayment = data => {
//     alert('Unsuccessful Payment!!!');
//     console.log(data);

// }

// const onToken = (amount, description) => token =>
//     axios.post("https://api.stripe.com",
//     {
//         description,
//         source: token.id,
//         currency: 'USD',
//         amount: amount
//     })
//     .then(successPayment)
//     .catch(errorPayment);

class CarPage extends Component {
    constructor() {
        super();
        this.state = {
            displayCar: {},
            buyCarButtonClicked: false,
            loading: true
        }
    }
    componentDidMount() {
        axios.get(`/api/cars/${this.props.match.params.state}/${this.props.match.params.id}`).then(res => {
            console.log('res.data.car-----------------', res.data.car);
           this.setState({displayCar: res.data.car[0], loading: false});
        }).catch(err => console.log('Get Cars Error-----------------', err));
    }
    render() {
        const { loading, displayCar, buyCarButtonClicked } = this.state;
        console.log(displayCar);
        if(!loading) {
            return (
                <div>
                    CarPage
                    <h1>{displayCar.year} {displayCar.make} {displayCar.model}</h1>

                    <div>
                        <img className='car-image' src={displayCar.imageurl || placeholderImage} alt={`${displayCar.make} ${displayCar.model}`} />
                    </div>
                    <span>Year</span><h6>{displayCar.year}</h6>
                    <span>Make</span><h6>{displayCar.make}</h6>
                    <span>Model</span><h6>{displayCar.model}</h6>
                    <span>Description</span><p>{displayCar.description}</p><br/>
                    <span>Location</span><h6>{displayCar.location}</h6>
                    <span>username</span><h6>{displayCar.username}</h6>   
                </div>
            );
        } else {
            return <div>
                    </div>
        }
    }
}

export default CarPage;