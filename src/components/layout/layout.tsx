import {Fragment, ReactElement} from 'react';
import Header from '../header/header.tsx';
import {Outlet} from 'react-router-dom';
import Spinner from '../spiner/spinner.tsx';
import {useAppSelector} from '../../hooks/hooks.ts';
import {isLoading as isLoadingSelector} from '../../store/loading/loading-selector.ts';

function Layout():ReactElement {
  const isLoading = useAppSelector(isLoadingSelector);

  return (
    <Fragment>
      <Header/>
      {isLoading ? <Spinner/> : <Outlet/>}
    </Fragment>
  );
}

export default Layout;
