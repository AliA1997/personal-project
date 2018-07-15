import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Map from './subComponents/Map';

class SchedulePage extends Component {
    constructor() {
        super();
        this.state = {
            auctionLocations:  [
                {name: 'Fontana, CA', coordinates: {lat:34.09223,lng: -117.43504}},
                {name: 'Riverside, CA', coordinates: {lat:33.9806,lng: -117.37549}},
                {name: 'Hayward, CA', coordinates: {lat:37.66882,lng: -122.08079}},
                {name: 'Modesto, CA', coordinates: {lat:37.63909,lng: -120.99687}},
                {name: 'Fresno, CA', coordinates: {lat:36.73779,lng: -119.78712}},
                {name: 'Anaheim, CA', coordinates: {lat:33.83659,lng: -117.9143}}, 
                {name: 'Beaumont, CA', coordinates: {lat:33.92946,lng: -116.97724}},
                {name: 'Las Vegas, NV', coordinates: {lat:36.16994, lng: -115.13982}},                                   
                {name: 'Henderson, NV', coordinates: {lat:36.03952, lng: -114.98172}},                                   
                {name: 'Scottsdale, AZ', coordinates: {lat:33.49417, lng: -111.92605}},                                   
                {name: 'Phoenix, AZ', coordinates: {lat:33.44837, lng: -112.07403}},                                   
                {name: 'Tucson, AZ', coordinates: {lat:32.2226, lng: -110.97471}},                                   
             ],
             lat: null,
             lng: null 
        }
    }
        
    componentDidMount() {
        let locs = this.state.auctionLocations.slice();
        if(this.props.match.params.state) {
            this.setState({
                auctionLocations: locs.filter(l => l.name.includes(this.props.match.params.state))
            });
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.setState({lat: pos.coords.latitude, lng: pos.coords.longitude});
                })
            }
        } else {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.setState({lat: pos.coords.latitude, lng: pos.coords.longitude});
                })
            }
        }
        this.setState({                
            lat: this.state.auctionLocations[0].coordinates.lat,
            lng: this.state.auctionLocations[0].coordinates.lng,   
        })
    }
    render() {
        const { lat, lng, auctionLocations } = this.state;
        return (
            <div>
                <div className='create-posting-div'>
                    <h4>Create a Posting</h4>
                    <Link className='create-posting-link' to='/create_posting'>Create Posting</Link>
                </div>
                <div className='recent-dates-div'>
                    <div className='schedule-div'> 
                        <h5>May 10, 2018</h5>
                        <p>Honda Dealership in Henderson</p>
                    </div>
                    <div className='schedule-div'>
                        <h5>May 20, 2018</h5>
                        <p>BMW Green Valley in Henderson</p>                        
                    </div>
                    <div className='schedule-div'>
                        <h5>May 30, 2018</h5>
                        <p>US Auto Sales in Las Vegas</p>                        
                    </div>
                </div>
                <div className='map'>
                    <Map lat={lat} lng={lng} locations={auctionLocations} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        locations: state.locations,
    };
}

export default connect(mapStateToProps)(SchedulePage);