import {Fragment, ReactElement} from 'react';
import Header from '../header/header.tsx';
import {Outlet} from 'react-router-dom';

function Layout():ReactElement {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
    </Fragment>
  );
}

export default Layout;
