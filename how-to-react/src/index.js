import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Redux from './Redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Redux />, document.getElementById('root'));
registerServiceWorker();
