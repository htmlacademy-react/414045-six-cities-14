import Main from '../../pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found.tsx';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import {Offer as OfferData} from '../../types/offer.ts';
import Layout from '../layout/layout.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import {ReactElement} from 'react';

type AppProps = {
  countOffers: number;
  offers: OfferData[];
}

function App({countOffers, offers}: AppProps): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout/>}>
          <Route index element={<Main countOffers={countOffers} offers={offers}/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Offer} element={<Offer offers={offers}/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
          />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
