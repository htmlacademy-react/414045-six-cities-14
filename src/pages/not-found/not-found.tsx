import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';
import Layout from '../../components/layout/layout.tsx';

function NotFound(): ReactElement {
  return (
    <Layout>
      <div className='container' style={{textAlign: 'center'}}>
        <h1>404 Not Found</h1>
        <Link to={AppRoute.Main}>{'Вернуться на главную страницу'}</Link>
      </div>
    </Layout>
  );
}

export default NotFound;
