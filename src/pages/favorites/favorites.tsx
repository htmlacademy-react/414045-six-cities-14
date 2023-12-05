import {Fragment, ReactElement} from 'react';
import {Favorites as FavoritesType, Offer} from '../../types/offer.ts';
import Footer from '../../components/footer/footer.tsx';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getFavoriteOffers} from '../../store/offer/offer-selector.ts';
import Layout from '../../components/layout/layout.tsx';
import {FavoritesList} from '../../components/favorites/favorites-list/favorites-list.tsx';
import {FavoritesEmpty} from '../../components/favorites/favorites-empty/favorites-empty.tsx';

function prepareFavoritesByCity(offers: Offer[]): FavoritesType[] {
  const favoritesByCity: FavoritesType[] = [];

  offers.forEach((offer: Offer) => {
    const favorites = favoritesByCity.find((favoritesFromCity) => favoritesFromCity.cityName === offer.city.name);

    if (typeof favorites === 'undefined') {
      favoritesByCity.push({
        cityName: offer.city.name,
        offers: [offer]
      });
    } else {
      favorites.offers.push(offer);
    }
  });

  return favoritesByCity;
}

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
