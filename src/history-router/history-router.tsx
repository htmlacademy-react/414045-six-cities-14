import {BrowserHistory} from 'history';
import {Router} from 'react-router-dom';
import {useLayoutEffect, useState} from 'react';

type HistoryRouteProps = {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

export default function HistoryRouter({history, basename, children}: HistoryRouteProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router basename={basename} location={state.location} navigationType={state.action} navigator={history}>
      {children}
    </Router>
  );
}
