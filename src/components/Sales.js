import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Sales extends Component {
    render() {
        return (
            <div>
            <h1>  Sales </h1>
            <Link to='/create_posting'>Create Posting</Link>
            </div>
        )
    }
}

export default Sales;