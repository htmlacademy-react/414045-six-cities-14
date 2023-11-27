import {ReactElement} from 'react';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks.ts';

type PrivateRouteProps = {
  children: ReactElement;
}

function PrivateRoute(props: PrivateRouteProps): ReactElement {
  const {children} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
