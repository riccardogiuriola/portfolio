import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorkerRegistration.register();
