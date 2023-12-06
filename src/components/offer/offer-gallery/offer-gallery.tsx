import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';

type OfferGalleryProps = {
  offer: Offer;
}

function OfferGallery({offer}: OfferGalleryProps):ReactElement {
  const images = offer.images.slice(0, 6);

  return (
    <div className="offer__gallery-container container" data-testid="offer-gallery-container">
      <div className="offer__gallery">
        {images.map((image) => {
          const alt = `Photo ${offer.type}`;

          return (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt={alt} data-testid="image"/>
            </div>);
        })}
      </div>
    </div>
  );
}

export default OfferGallery;
