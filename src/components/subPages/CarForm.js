import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { chgCarState } from '../../redux/reducer';
class CarForm extends Component {
    constructor() {
        super();
        this.state = {
            userId: null,
            prices: [],
            years: [],
            locations:[
                    'Fontana, CA',
                    'Anaheim, CA',
                    'Hayward, CA', 
                    'Modesto, CA',
                    'Fresno, CA',
                    'Riverside, CA',
                    'Scottsdale, AZ',
                    'Phoenix, AZ',
                    'Tucson, AZ',
                    'Las Vegas, NV', 
                    'Henderson, NV'
            ],
        }
    }
    componentDidMount() {
        let yearsArr = [];
        let pricesArr = [];
        for(let i = 2018; i > 1940; i--) {
            yearsArr.push(i);
        }
        for(let i = 300; i < 10000; i < 1000 ? i += 100 : i += 500) {
            pricesArr.push(i);
        }
        this.setState({years: yearsArr, prices: pricesArr});
        axios.get('/api/user-data').then(res => {
            if(res.data.user === undefined) window.location = `http://localhost:${window.location.port}/#/`; 
            console.log(res.data.user[0].id)
            this.setState({userId: res.data.user[0].id});
        })
    }
    createPosting() {
        // e.preventDefault();
        const {type, make, model, year, odometer, location, price, imageurl} = this.props.car;
        const { userId } = this.state;
        console.log({userId, type, make, model, year, odometer, location, price, imageurl})
        axios.post(`/api/${userId}/cars`, { make, model, year, odometer, location, type, imageurl }).then(res =>{
            console.log(res.data.car)
        });
        window.location.reload();
    }
    render() {
        const {chgCarState} = this.props;
        const { imageurl } = this.props.car;
        const { name } = this.props.account;
        return (
            <div>
                <form onSubmit={e => this.createPosting()}>
                    <img src='https://www.happyceliac.com/wp-content/uploads/2018/02/placeholder-image.png' height='300' alt={`${name} this is your car!!.`} />
                    <label>Car Image</label>
                    <input onChange={e => chgCarState(e, 'image', e.target.value)} />
                    <select onChange={e => chgCarState(e, 'car_type', e.target.value)}>
                        <option value='coupe'>Coupe</option>
                        <option value='sedan'>Sedan</option>
                        <option value='suv'>Suv</option>
                        <option value='truck'>Truck</option>                
                        <option value='truck'>Van</option>     
                    </select>  
                    <label>Starting Price</label>
                    <select onChange={e => chgCarState(e, 'price', e.target.value)}>
                        {this.state.prices.map((p, i) => <option key={i}>{p}</option>)}
                    </select>         
                    <label>Make</label>
                    <input onChange={e => chgCarState(e, 'make', e.target.value)}/>
                    <label>Model</label>
                    <input onChange={e => chgCarState(e, 'model', e.target.value)}/>
                    <label>Year</label>
                    <select onChange={e => chgCarState(e, 'year', e.target.value)}>
                        {this.state.years.map((y, i) => <option key={i} value={y}>{y}</option>)}    
                    </select>
                    <label>Miles</label>
                    <input onChange={e => chgCarState(e, 'miles', e.target.value)}/>
                    <label>Location</label>
                    <select onChange={e => chgCarState(e, 'location', e.target.value)}>
                        {this.state.locations.map((l, i) => <option key={i}>{l}</option>)}
                    </select>
                    <button type='submit'>Create Vehicle Listing</button>
                </form>
            </div>
            );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    chgCarState,
}
export default connect(mapStateToProps, mapDispatchToProps)(CarForm);