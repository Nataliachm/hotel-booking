/* eslint-disable import/order */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './index.css';
// import Header from './components/Header';
// import MainHome from './components/MainHome';
// // import MainHotel from './components/MainHotel';
// import Footer from './components/Footer';
import './styles/base/base.scss';
import './styles/base/reset.scss';
import './styles/abstract/variables.scss';
import './styles/abstract/mixins.scss';
import { Auth0Provider } from '@auth0/auth0-react';

// import { AppContext } from '../../store/AppContext';
// import FilterControl from './components/FilterControl';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6mn6diz8ixdxs035.us.auth0.com"
      clientId="2KhrtSjiNxR5AILPegyHnPPlm5jq63rr"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
