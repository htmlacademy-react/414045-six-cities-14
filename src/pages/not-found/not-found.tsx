import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

function NotFound(): ReactElement {
  return (
    <div className='container' style={{textAlign: 'center'}}>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>{'Вернуться на главную страницу'}</Link>
    </div>
  );
}

export default NotFound;
