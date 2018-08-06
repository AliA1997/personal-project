import React, { Component } from 'react';
import axios from 'axios';
import placeholderImage from '../../imgs/placeholder.jpg';
import Loader from '../subComponents/Loader';
import { connect } from 'react-redux';
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
            bids: [],
            currentBid: '',
            doBid: false, 
            displayCar: {},
            buyCarButtonClicked: false,
            loading: true,
            bidLoading: true
        }
    }
    componentDidMount() {
        axios.get(`/api/cars/${this.props.match.params.state}/${this.props.match.params.id}`).then(res => {
            console.log('res.data.car-----------------', res.data.car);
           this.setState({displayCar: res.data.car[0], bids: res.data.bids, loading: false, bidLoading: false});
        }).catch(err => console.log('Get Cars Error-----------------', err));
    }
    handleCurrentBid(val) {
        this.setState({currentBid: val});
    }
    bid() {
        const { currentBid, doBid } = this.state;
        const { price } = this.state.displayCar;
        const { username, id} = this.props;
        console.log('username---------', this.props.username);
        if(doBid && currentBid) {
            if(window.confirm('You sure you want to bid this amount ' + currentBid)) {
                this.setState({bidLoading: true});
                axios.patch(`/api/bid/${this.props.match.params.id}`, {username, id, currentBids: this.state.bids, bid: currentBid, price})
                .then(res => {
                    alert(res.data.message)
                    this.setState({currentBid: '', doBid: false, bids: res.data.bids ? res.data.bids : this.state.bids, bidLoading: false});
                }).catch(err => console.log('Bidding Error-----------', err));
            }
        } else {
            this.setState({currentBid: '', doBid: !this.state.doBid})
        }
    }
    render() {
        const { loading, displayCar, buyCarButtonClicked, currentBid, doBid, bids, bidLoading } = this.state;
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
                    <span>Username</span><h6>{displayCar.username}</h6>
                    <span>Starting Bid:</span><h6>{displayCar.price}</h6>
                    <div>
                        Recent Bids 
                        {!bidLoading ? bids.length ? bids.map(bid => bid && <div>
                                                        <p>{bid.username}</p>
                                                        <p>${bid.bid}</p>
                                                    </div>) : null
                        : <Loader />}
                    </div>
                    <div className='bid-button-div'>   
                        <button onClick={() => this.bid()} className='bid-button'>Bid</button>
                        <input type='number' value={currentBid}  onChange={(e) => this.handleCurrentBid(e.target.value)} 
                        style={{display: doBid ? 'inline-block' : 'none'}} />
                    </div>
                </div>
            );
        } else {
            return <div>
                    </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id,
        username: state.user.username
    }
}

export default connect(mapStateToProps)(CarPage);