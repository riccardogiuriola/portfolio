import React from 'react';
import ReactDOM from 'react-dom';
import './globals';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorkerRegistration.register();
