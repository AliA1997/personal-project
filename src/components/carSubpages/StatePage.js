import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveCars } from '../../redux/reducers/cars_reducers';
import axios from 'axios';
import CarForSale from '../subComponents/CarForSale';

class StatePage extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         stateCars: []
    //     }
    // }
    componentDidMount() {
        const { retrieveCars } = this.props;
        axios.get(`/api/cars/${this.props.match.params.state}`).then(res => {
            retrieveCars(res.data.cars);
        })
    }
    render() {
        const { cars } = this.props;
        return (
            <div>
                <h3>{this.props.match.params.state} Listings</h3>
                {cars.length > 0 ? cars.map(c => <CarForSale key={c.id} {...c} />) 
                : 'There is no listing available. :( Sorry!'}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cars: state.car.cars
    };
}

const mapDispatchToProps = {
    retrieveCars,
}

export default connect(mapStateToProps, mapDispatchToProps)(StatePage);