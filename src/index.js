import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.css';
import './index.css';
import 'bootstrap';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

console.log(process.env);

serviceWorker.register();
