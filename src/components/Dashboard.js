import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../redux/reducers/user_reducers';
import { retrieveCars } from '../redux/reducers/cars_reducers';
import SellerCar from './subComponents/SellerCar';
import CarForSale from './subComponents/CarForSale';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            isSeller: false,
            carsForSaleClicked: false,
            boughtVehiclesClicked: false,
            profileInfoClicked: false,
            itemsToDisplay: [],
        }
    }
    componentDidMount() {
        const { retrieveCars } = this.props;
        const { account } = this.props.user;
        console.log('id--------------', account.id);
        if(account.id) {
        axios.get(`/api/${+account.id}/cars`).then(res => {
            console.log('res.data.cars-----------------', res.data);
            retrieveCars(res.data.user_cars);
            if(account.seller_id) this.setState({isSeller: true});
        }).catch(err => console.log('Get User Cars Error-------------', err));

        }
    }
    render() {
        const { carsForSaleClicked, profileInfoClicked, boughtVehiclesClicked  } = this.state;
        //Profile info 
        const { id, imageurl, name, username, company_name, phone_number, email } = this.props.user.account;
        //Car Info
        const { cars, years, locations } = this.props.car;
        return (
            <div className='dashboard-page'>



                <div className='dashboard-div'>
                    <nav className='dashboard-nav'>
                        <li className='profile-info-pane' onClick={e => this.setState({profileInfoClicked: !this.state.profileInfoClicked, carsForSaleClicked: false, boughtVehiclesClicked: false})}>
                            Profile
                        </li>
                        <li className='general-info-pane' onClick={e => this.setState({carsForSaleClicked: !this.state.carsForSaleClicked,  profileInfoClicked: false, boughtVehiclesClicked: false})}>
                            Cars For Sale
                        </li>
                        <li className='general-info-pane' onClick={e => this.setState({boughtVehiclesClicked: !this.state.boughtVehiclesClicked,  profileInfoClicked: false, carsForSaleClicked: false})}>
                            Vehicles Bought
                        </li>
                    </nav>
                    <div className='dashboard-results-div'>
                        <div className='profile-info-div' style={{'display': profileInfoClicked && !carsForSaleClicked && !boughtVehiclesClicked ? 'inline-block' : 'none', width: '60vw'}} >
                            <h5>Profile Info</h5><br/>
                            <img src={imageurl || 'https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640'} alt={username} />
                            <p>{name}</p><br/>
                            <p>{username}</p><br/>
                            <p>{company_name}</p><br/>
                            <p>{phone_number}</p><br/>
                            <p>{email}</p><br/>

                            <Link to={`/profile/${id}`}>
                                <button>
                                See Profile
                                </button>
                            </Link>                        
                        </div>
                        <div className='general-info-links-div' style={{'display': carsForSaleClicked ? 'flex' : 'none', width: '80%' }}>
                            {cars.length ? cars.map(c => <SellerCar className='seller-car' key={c.id} {...c}  years={years} locations={locations}/>) : <p>Did not list any cars!</p>} 
                        </div>
                        <div className='cars-bought-info-links-div' style={{'display': boughtVehiclesClicked ? 'flex' : 'none', width: '80%' }}>
                            {cars.length ? cars.map(c => <CarForSale className='seller-car' key={c.id} {...c}  years={years} locations={locations}/>) : <p>Did not buy or won any bids for any cars!</p>} 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }

    
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = {
userLogin,
retrieveCars,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);