import React, {Component} from 'react';
// import { withScriptjs,  withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

//Lazy loading Google API
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }
    onMarkerClick = (props, marker, e) => {
            this.setState({
                selectedPlace: props,
                activeMarker: marker,
                showingInfoWindow: !this.state.showingInfoWindow
            })
    }
    onMapClicked = (props) => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }
    render() {
        const {locations} = this.props;
        
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < locations.length; i++) {
            bounds.extend(locations[i].coordinates);
        }
        return (
            <div  className='map'>
                <Map style={{'height': '60vh', "width": "100%"}} isMarkerShown google={this.props.google} onClick={this.onMapClicked}
                zoom={this.props.zoom || 13} initialCenter={{lat: this.props.lat, lng: this.props.lng}} 
                center={{lat: this.props.lat, lng:this.props.lng}}>
                    {
                        locations.map((loc, i) => <Marker title={loc.name} 
                                                            key={i}
                                                            name={`${loc.name} auction location.`}
                                                            position={{lat: loc.coordinates.lat, lng: loc.coordinates.lng}} 
                                                            onClick={this.onMarkerClick}
                                                            // icon={{
                                                            //     url: 'http://www.clker.com/cliparts/S/J/k/r/N/m/blue-car.svg',
                                                            //     scaledSize: this.props.google.maps.Size(32, 32) 
                                                            // }}
                                                            />
                                                        )}
                        
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}
//Wrap the map in a similar syntax in redux
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCgocllDxw-Mj6X6-_XKCnElTQFJvisduU'
})(MapContainer);