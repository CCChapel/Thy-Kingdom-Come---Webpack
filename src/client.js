import React from 'react';
import ReactDOM from 'react-dom';

//import Page from './components/page/page';
import _math from './includes/math.js';
import _string from './includes/string.js';
import _json from './includes/json.js';
import _fetch from './includes/polyfills/fetch.js';

//import Components from './components/index.js';
// import VimeoVideo from './embeds/vimeoVideo';

// import ContactForm from './forms/contact';

// import Clock from './images/clock';
// import Logo from './images/logo';

// import MinistryPartnersTable from './ministryPartners/ministryPartnersTable';
// import MinistryPartnerRow from './ministryPartners/ministryPartnerRow';
// import MinistryPartnerInformation from './ministryPartners/ministryPartnerInformation';

// import CTA from './page/cta';
// import Modal from './page/modal';
// import Section from './page/section';
import Page from './components/page/page';


ReactDOM.render(
    <Page />,
    document.getElementById('root')
);