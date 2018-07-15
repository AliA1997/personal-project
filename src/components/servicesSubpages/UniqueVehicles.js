import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class UniqueVehicles extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3>Unique Vehicles</h3>
                <h5>Looking for a specific Car?</h5>
                <div className='unique-vehicles-list'>
                    <div className='box'>
                        <img src='https://www.removemycar.co.uk/imgs/salvage%20car%20pic.png' alt='Salvage Vehicles' />
                        <h5>Salvage </h5>
                        <p>Looking for a car with a salvage title</p><br/>
                        <button><Link className='link' to='/inventory?title=salvage'>Salvage</Link></button>
                    </div>
                    <div className='box'>
                        <img src='https://i.pinimg.com/originals/e4/35/04/e435046dd77b1ec3e0b601690366fb30.jpg' alt='Specialty Vehicles' />                    
                        <h5>Specialty </h5>
                        <p>Looking for rv's and other specialty cars for freight and other tasks.</p><br/>
                        <button><Link className='link' to='/inventory?type=specialty'>Specialty</Link></button>
                    </div>
                    <div className='box'>
                        <img src='http://billionairetoys.com/wp-content/uploads/supercars-club-02-1.jpg' alt='Highline Events' />                        
                        <h5>Highline Events</h5>
                        <p>Looking for supercars such as Ferrari, and Lamborgini.</p><br/>
                        <button><Link className='link' to='/highline_events'>Highline Events</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UniqueVehicles;