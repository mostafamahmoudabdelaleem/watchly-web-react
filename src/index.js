import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.css';
import './index.css';
import 'bootstrap';
import App from './App';

if(process.env.NODE_ENV === "development"){
    require('dotenv').config()
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
