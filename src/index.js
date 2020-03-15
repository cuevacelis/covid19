import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//console.time('TIME index.js');
ReactDOM.render(<App />, document.getElementById('root'));
//console.timeEnd('TIME index.js');
serviceWorker.register();
