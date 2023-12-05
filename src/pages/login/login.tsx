import {ChangeEvent, ReactElement, SyntheticEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks/hooks.ts';
import {AuthData} from '../../types/user.ts';
import {loginAction} from '../../store/api-action.ts';

function Login(): ReactElement {
  const [formData, setFormData] = useState<AuthData>({email: '', password: ''});
  const dispatch = useAppDispatch();

  const fieldChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
  };

  return (
    <div className="page page--gray page--login" data-testid="login-page">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={submitHandler} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={fieldChangeHandler} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={fieldChangeHandler} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
