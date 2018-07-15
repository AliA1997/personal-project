import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Map from './subComponents/Map';

class Locations extends Component {
    constructor() {
        super();
        this.state = {
            clickedAZ: false,
            clickedCA: false,
            clickedNV: false,
            lat: null,
            lng: null,
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
            ]
        }
    }
    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.setState({lat: pos.coords.latitude, lng: pos.coords.longitude});
            })
        }
    }
    render() {
        const { auctionLocations, lat, lng } = this.state;
        return (
            <div className='location-div'>
                <h1>  Locations </h1>
                <div className='tablet-view-locations'>
                    <Link to='/sales_schedule/AZ' className='link'>
                        <button onClick={() => this.setState({clickedAZ: !this.state.clickedAZ})}>
                        Arizona
                        </button>
                    </Link><br/>
                    <Link to='/sales_schedule/CA' className='link'>
                        <button onClick={() => this.setState({clickedCA: !this.state.clickedCA})}>
                        California
                        </button>
                    </Link><br/>
                    <Link to='/sales_schedule/NV' className='link'>
                        <button onClick={() => this.setState({clickedNV: !this.state.clickedNV})}>
                        Nevada
                        </button>
                    </Link><br/>
                </div>
                <Map lat={lat} lng={lng} locations={auctionLocations} zoom={7}/>
            </div>
        )
    }
}

export default Locations;