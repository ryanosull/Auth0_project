import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { Auth0Provider } from '@auth0/auth0-react'; // import provider from library

const domain = process.env.REACT_APP_AUTH0_DOMAIN; //domain from Auth0 dashboard
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; //clientID from Auth0 dashboard

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider //App wrapped with 'Auth0Provider' component
      domain={domain} // from .env
      clientId={clientId} // from .env
      authorizationParams={{
        redirect_uri: window.location.origin // the URL to where you'd like to redirect your users after they authenticate with Auth0
        }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

