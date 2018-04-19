import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class SubNav extends Component {
    constructor() {
        super();
        this.state = {
            clicked: true,
        }
    }
    render() {
        const { clicked } = this.state;
        return (
            <div>

                <nav className='main-nav'>
                    <ul>
                        {this.props.list.map((item, index) => {
                            return (
                                <div key={index} style={{'display': clicked ? 'inline-block' : 'none'}}>
                                    <li>{item}</li>
                                    <pre>{this.props.info}</pre>
                                </div>
                            );
                        })
                        }
                    </ul>                
                </nav>
            </div>
        );
    }
}

export default SubNav;