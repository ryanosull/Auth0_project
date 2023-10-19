import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN; //domain from Auth0 dashboard
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; //clientID from Auth0 dashboard

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider //App wrapped with 'Auth0Provider' component
      domain={domain} // from .env
      clientId={clientId} // from .env
      authorizationParams={{
        redirect_uri: window.location.origin //user redirect after authentication 
        }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
