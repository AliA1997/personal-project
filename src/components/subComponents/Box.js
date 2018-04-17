import React, {Component} from 'react';

class Box extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        };
    }
    clickTitle() {
        this.setState({clicked: true});
    }
    render() {
        const { clicked } = this.state;
        return (
            <div>
                <h3 onClick={this.clickTitle}>{this.props.title}</h3>
                <div className='box' style={{'display': clicked ? 'inline-block' : 'none'}}>
                    <ul>
                        {this.props.list.map(l => <div><li>{l}</li></div>)}                    
                    </ul>
                </div>
            </div>
        )
    }
}

export default Box;