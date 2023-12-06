import Main from '../../pages/main/main.tsx';
import {Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found.tsx';
import {AppRoute} from '../../consts.ts';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import {ReactElement, useEffect} from 'react';
import {useAppDispatch} from '../../hooks/hooks.ts';
import {loadMainPageDataAction} from '../../store/api-action.ts';

function App(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMainPageDataAction());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={AppRoute.Main}>
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
  );
}

export default App;
