import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {COUNT_OFFERS} from './consts.ts';
import {offers} from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App countOffers = {COUNT_OFFERS} offers={offers}/>
  </React.StrictMode>
);
