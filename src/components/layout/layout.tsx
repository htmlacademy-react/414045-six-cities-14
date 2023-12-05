import {ReactElement} from 'react';
import Header from '../header/header.tsx';
import Spinner from '../spiner/spinner.tsx';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getIsLoading as isLoadingSelector} from '../../store/loading/loading-selector.ts';

type LayoutProps = {
  pageClassNames?: string;
  children: ReactElement;
}

function Layout({pageClassNames, children}: LayoutProps):ReactElement {
  const isLoading = useAppSelector(isLoadingSelector);
  const defaultPageClassNames = 'page';

  return (
    <div className={pageClassNames ?? defaultPageClassNames}>
      <Header/>
      {isLoading ? <Spinner/> : children}
    </div>
  );
}

export default Layout;
