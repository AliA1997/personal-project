import React, {Component} from 'react';
import SubNav from './subComponents/SubNav';

class Dashboard extends Component {
    render() {
        const itemsToDisplay = [
            'account summary',
            'recent purchases',
            'recent sales'
        ]
        return (
            <div>
                <SubNav list={itemsToDisplay} info='stuff' />
            </div>
        )
    }
}

export default Dashboard;