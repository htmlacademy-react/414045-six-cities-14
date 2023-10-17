import {ReactElement} from 'react';
import Header from '../../components/header/header.tsx';
import Footer from '../../components/footer/footer.tsx';
import {getFavoritesLocations} from '../../mocks/favorites-locations.tsx';

function Favorites():ReactElement {
  const favoritesLocations: ReactElement[] = getFavoritesLocations();

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesLocations.map((locationItems) => locationItems)}
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
