import React, {Component} from 'react';
class CreateCar extends Component {
    constructor() {
        super();
        this.state = {
            years: [
                2000,
                2001
            ],
            locations: [
                'Fontana'
            ]
        }
    }
    render() {
    return (
        <div>
            <form>
                <img src='' alt='car-image' />
                <label>Type</label>
                <select>
                    <option value='coupe'>Coupe</option>
                    <option value='sedan'>Sedan</option>
                    <option value='suv'>Suv</option>
                    <option value='truck'>Truck</option>                
                    <option value='truck'>Van</option>     
                </select>           
                <label>Make</label>
                <input />
                <label>Model</label>
                <input />
                <label>Year</label>
                <select>
                    {this.state.years.map(y => <option value={y}>{y}</option>)}    
                </select>
                <label>Miles</label>
                <input />
                <label>Location</label>
                <select>
                    {this.state.locations.map(l => <option value={l}>{l}</option>)}
                </select>
            </form>
        </div>
        );
    }
}

export default CreateCar;