import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';
import classNames from 'classnames';

type OfferHostProps = {
    offer: Offer;
}

function OfferHost({offer}:OfferHostProps): ReactElement {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={classNames('offer__avatar-wrapper', 'user__avatar-wrapper', {'offer__avatar-wrapper--pro': offer.host.isPro})}>
          <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">{offer.host.name}</span>
        {offer.host.isPro ? <span className="offer__user-status" data-testid="is_pro">Pro</span> : ''}
      </div>
      <div className="offer__description">
        <p className="offer__text">
          {offer.description}
        </p>
      </div>
    </div>
  );
}

export default OfferHost;
