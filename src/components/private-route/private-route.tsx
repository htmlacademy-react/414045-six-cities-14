import {ReactElement} from 'react';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getAuthorizationStatus} from '../../store/auth/auth-selector.ts';

type PrivateRouteProps = {
  children: ReactElement;
}

function PrivateRoute(props: PrivateRouteProps): ReactElement {
  const {children} = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus !== AuthorizationStatus.NoAuth ? children : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
