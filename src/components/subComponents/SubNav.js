import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
                <div className='logo-div'>
                    <span><img src='fhjkashdl' rel='munther logo'/></span>
                </div>
                <nav className='main-nav'>
                    <ul>
                        {this.props.list.map(item => {
                            return (
                                <div style={{'display': clicked ? 'inline-block' : 'none'}}>
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