import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history = createHistory();

ReactDOM.render(<Router history={history}>
    <App />
</Router>, document.getElementById('root'));
registerServiceWorker();
