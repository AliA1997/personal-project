import React from 'react';
import ReactLoading from 'react-loading';

const Loader = (props) => {
    return (
        <div>
            <ReactLoading type='spin' color='darkblue' height={350} width={350} />
        </div>
    )
}

export default Loader;