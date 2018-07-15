import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { retrieveCars } from '../redux/reducers/cars_reducers';
import Filter from './subComponents/Filter';
import CarForSale from './subComponents/CarForSale';
import Loader from './subComponents/Loader';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            filteredCars: [],
            filtered: false,
            loading: true
        }
    }
    componentDidMount() {
        const { retrieveCars } = this.props;
        axios.get('/api/cars').then(res => {
            retrieveCars(res.data.cars);
            this.setState({filteredCars: this.props.car.cars, loading: false});
        }).catch(err => console.log('Get Cars Error-------------', err));
    }
    filterCars(filterType, filterVal) {
        // switch(filterType) {
        //     case 'state' : 
        //     this.setState({filteredCars: []});
        //     break;
        //     default:
        //     return this.state.filteredCars;
        // }
    }
    redirect = path => {
        this.props.history.push(path);
    }
    render() {
        const { filtered, loading, filteredCars } = this.state;
        const { cars } = this.props.car;
        if(!loading) {
            return (
                <div>
                    <h1>  Inventory </h1>
                    <Filter redirect={this.redirect} list={[
                        'AZ',
                        'CA',
                        'NV'
                    ]} filter={this.filterCars}/>
                    <div className='checkbox-div'>
                        <div style={{'display': filtered ? 'none' : 'inline-block'}} >
                            {cars.map(c => <CarForSale key={c.id} {...c} />)}
                        </div>
                        <div style={{'display': filtered ? 'inline-block' : 'none'}} >
                            {filteredCars.map(c => <CarForSale key={c.id} {...c} />)}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Loader />
        }
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    retrieveCars,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inventory));