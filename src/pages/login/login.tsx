import {ChangeEvent, ReactElement, SyntheticEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {AuthData} from '../../types/user.ts';
import {loginAction} from '../../store/api-action.ts';
import Layout from '../../components/layout/layout.tsx';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/auth/auth-selector.ts';
import {redirectToRoute} from '../../store/actions.ts';
import classNames from 'classnames';

import './login.css';
import {getRandomCity} from '../../services/offer-service.ts';
import {setCity} from '../../store/offer/offer-slice.ts';

function Login(): ReactElement {
  const [formData, setFormData] = useState<AuthData>({email: '', password: ''});
  const [isPasswordError, setIsPasswordError] = useState(false);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const [location,] = useState(getRandomCity());

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  });

  const validatePassword = (password: string) => {
    const reg = /^(?=.*[a-zA-Z])(?=.*\d)[^\s]+$/;

    return reg.test(password);
  };

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (validatePassword(value)) {
      setIsPasswordError(false);
    } else {
      setIsPasswordError(true);
    }
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
  };

  const handleCityButton = () => {
    dispatch(setCity({city: location}));
  };

  return (
    <Layout pageClassNames={'page page--gray page--login'}>
      <main className="page__main page__main--login" data-testid="login-page">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={handleFieldChange} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={handleFieldChange} className={classNames('login__input', 'form__input', {'form__input--error': isPasswordError})} type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={isPasswordError}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link onClick={handleCityButton} className="locations__item-link" to={AppRoute.Main}>
                <span>{location.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Login;
