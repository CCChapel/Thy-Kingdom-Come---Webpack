import React from 'react';
import ReactDOM from 'react-dom';

import _math from './includes/math.js';
import _string from './includes/string.js';
import _json from './includes/json.js';
import _fetch from './includes/polyfills/fetch.js';
import _scroll from './includes/third-party/scroll.min';
import _cookies from './includes/third-party/js.cookie';

import Page from './components/page/page';

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);