import {Fragment, ReactElement} from 'react';
import Footer from '../../components/footer/footer.tsx';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getFavoriteOffers} from '../../store/offer/offer-selector.ts';
import Layout from '../../components/layout/layout.tsx';
import {FavoritesList} from '../../components/favorites/favorites-list/favorites-list.tsx';
import {FavoritesEmpty} from '../../components/favorites/favorites-empty/favorites-empty.tsx';
import {prepareFavoritesByCity} from '../../services/offer-service.ts';

function Favorites(): ReactElement {
  const offers = useAppSelector(getFavoriteOffers);
  const favoritesByCity = prepareFavoritesByCity(offers);

  return (
    <Layout>
      <Fragment>
        {favoritesByCity.length ? <FavoritesList favoritesByCity={favoritesByCity}/> : <FavoritesEmpty/>}
        <Footer/>
      </Fragment>
    </Layout>
  );
}

export default Favorites;
