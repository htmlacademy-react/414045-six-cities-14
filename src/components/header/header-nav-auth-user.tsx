import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {logoutAction} from '../../store/api-action.ts';
import {getAuthInfo} from '../../store/auth/auth-selector.ts';
import {getFavoriteOffers} from '../../store/offer/offer-selector.ts';

export default function HeaderNavAuthUser() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(getAuthInfo);
  const favorites = useAppSelector(getFavoriteOffers);
  const favoritesCount = favorites.length;

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{userInfo?.email}</span>
            <span className="header__favorite-count">{favoritesCount}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link onClick={logoutHandler} className="header__nav-link" to={AppRoute.Login}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
