import React, {Component} from 'react';
import { connect } from 'react-redux';
import FaCheck from 'react-icons/lib/fa/check';
import Map from '../subComponents/Map';

class CRMap extends Component {
    constructor() {
        super();
        this.state = {
            locations: []
        }
    }
    componentWillUnmount() {
        clearTimeout();
    }
    render() {
        console.log(this.props.car.conditionReportLocations.AZ);
        return (
            <div>
                <h3>Condition Reporting</h3>
                <h3>Benefits</h3>
                <ul className='condition-report-info-list'>
                    <li>Build buyer confidence and increase sales rates</li>
                    <li>Get buyers to look at your listings first</li>
                    <li>Cut down on arbitration</li>
                </ul>
                <h3>Condition Reporting Options</h3>
                <table className='condition-report-table'>
                    <thead>
                        <tr>
                            <td>Report Contains</td>
                            <td>Good Basic Listing</td>
                            <td>Better Seller Disclosure</td>     
                            <td>Best Condition Report</td>                   
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vehicle Description</td>
                            <td>Basic</td>
                            <td>Basic</td>     
                            <td><FaCheck /></td>                   
                        </tr>
                        <tr>
                            <td>Frame Damage Report</td>
                            <td>Limited</td>
                            <td><FaCheck /></td>     
                            <td><FaCheck /></td>                   
                        </tr>
                        <tr>
                            <td>Prior Paint Info</td>
                            <td><FaCheck /></td>
                            <td><FaCheck /></td>     
                            <td><FaCheck /></td>                   
                        </tr>
                        <tr>
                            <td>Tire Information</td>
                            <td> </td>
                            <td><FaCheck /></td>     
                            <td><FaCheck /></td>     
                        </tr>
                        <tr>
                            <td>Description of Options</td>
                            <td> </td>
                            <td>Limited</td>     
                            <td><FaCheck /></td>     
                        </tr>
                        <tr>
                            <td>Images</td>
                            <td> </td>
                            <td><FaCheck /></td>     
                            <td><FaCheck /></td>     
                        </tr>
                        <tr>
                            <td>Visual Damage Summary</td>
                            <td> </td>
                            <td> </td>     
                            <td><FaCheck /></td>     
                        </tr>
                        <tr>
                            <td>Mechanical Damage Summary</td>
                            <td> </td>
                            <td><FaCheck /></td>     
                            <td>Extra Charges($25)</td>     
                        </tr>
                    </tbody>
                </table>
                <h3>Condition Reporting or Maintanence Locations</h3>
                <div className='map'>
                    <Map locations={this.props.car.conditionReportLocations.AZ} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        car: state.car
    };
}

export default connect(mapStateToProps)(CRMap);