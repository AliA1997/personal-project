import React, {Component} from 'react';
import SubNav from './subComponents/SubNav';
import axios from 'axios';
import { connect } from 'react-redux';
import { userLogin, retrieveCars } from '../redux/reducer';
import Car from './subComponents/Car';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            years: [],
            prices: []
        }
    }
    componentDidMount() {
        // //ES6 Syntax!!
        // let yearsArr = [], pricesArr = [];
        // for(let i = 2018; i >= 1940; i--) {
        //     yearsArr.push(i);
        // }
        // for(let i = 300; i < 10000; i <= 1000 ?  i += 100 : i += 500) {
        //     pricesArr.push(i);
        // }
        // this.setState({years: yearsArr, prices: pricesArr});
        const { userLogin } = this.props;
        axios.get('/api/user-data').then(res => {
            if(res.data.user === undefined) {
                window.location = `http://localhost:${window.location.port}/#/`;
            } else {
                userLogin(res.data.user[0])
                //currentUser the current user data accessed via get request above.
                //retrieveCars is a way of retrieving cars via get request and user id.
                const { currentUser, retrieveCars } = this.props;
                axios.get(`/api/${currentUser.id}/cars`).then(res => {
                    retrieveCars(res.data.user_cars);
                })
            }
        })

    }
    render() {
        const { cars, locations, prices, years } = this.props;
        const itemsToDisplay = [
            'account summary',
            'recent postings', 
            'recent purchases',
            'recent sales'
        ]

        return (
            <div>
                {/* <h3>Welcome {currentUser.name}</h3> */}
                <SubNav list={itemsToDisplay} info='stuff' />
                <ul>
                    {cars.map(c => <Car key={c.id} {...c}  prices={prices} years={years} location={locations}/>)} 
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        cars: state.cars,
        years: state.years,
        prices: state.prices,
        locations: state.locations
    };
}

const mapDispatchToProps = {
    userLogin,
    retrieveCars,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);