import React, {Component} from 'react';

class Filter extends Component {
    directState(state) {
        this.props.redirect(`/inventory/${state}`)
    }
    render() {


        // console.log(makes[['PromiseValue']]);
        return (
            <div>
                <form className='filter-form'>
                    {this.props.list.map((l, i) => {
                        return (
                            <span className='filter-checkbox' key={i}>
                                <label>{l}</label><br/>
                                <input type='checkbox' value={l} onClick={e => this.directState(e.target.value)}/>
                            </span>
                            );
                        })  
                    }              
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}


export default (mapStateToProps)(Filter);