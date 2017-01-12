import React from 'react';
import ReactDOM from 'react-dom';

import _math from './includes/math.js';
import _string from './includes/string.js';
import _json from './includes/json.js';
import _fetch from './includes/polyfills/fetch.js';

import Page from './components/page/page';


ReactDOM.render(
    <Page />,
    document.getElementById('root')
);