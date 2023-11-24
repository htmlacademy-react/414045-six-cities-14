import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {useAppSelector} from '../../hooks/hooks.ts';
import HeaderNavAuthUser from './header-nav-auth-user.tsx';
import HeaderNavNotAuthUser from './header-nav-not-auth-user.tsx';

function Header():ReactElement {
  const authorizationStatus = useAppSelector((store) => store.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {authorizationStatus === AuthorizationStatus.Auth ? <HeaderNavAuthUser/> : <HeaderNavNotAuthUser/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
