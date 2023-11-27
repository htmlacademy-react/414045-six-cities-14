import Main from '../../pages/main/main.tsx';
import {Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found.tsx';
import {AppRoute} from '../../consts.ts';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import Layout from '../layout/layout.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import {ReactElement, useEffect} from 'react';
import {useAppDispatch} from '../../hooks/hooks.ts';
import {loadOffersAction, checkAuthAction} from '../../storage/api-action.ts';
import HistoryRouter from '../../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';

function App(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadOffersAction());
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Offer} element={<Offer/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <Favorites/>
            </PrivateRoute>
          }
          />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
