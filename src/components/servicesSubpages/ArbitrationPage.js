import React, {Component} from 'react';

class ArbitrationPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className='arbitration-page'>
                <h3>Arbitration</h3>
                <h4>Got a vehicle not what you expected?</h4>
                <div className='arbitration-info'>
                    <ul style={{'listStyle': 'none'}}>
                        <li>Have you purchased a vehicle that has issues that weren’t disclosed during the sale?</li>
                        <li>Were you unaware that a vehicle title wasn’t available at the sale? If so, you may be eligible for arbitration.</li>
                        <li>protect buyers and sellers and help guarantee fair and ethical sales.</li>
                        <li>During the arbitration process, Munther Auction acts as a neutral intermediary to investigate and resolve transaction-related disputes.</li>
                        <li>Possible outcomes include sale price adjustment or sale cancellation.</li>
                        <li>Service is subject to arbitration fee.</li>
                        <li>Arbitration can be initiated online or through any Munther Auction in the U.S. or Canada.</li>
                        <li>Claims must be filed within the time periods defined by Appendix I of the NAAA Arbitration Policy.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArbitrationPage;