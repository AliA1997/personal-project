import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter as R } from 'react-router-dom';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store} >
    <R>
        <App />
    </R>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
