import Main from '../../pages/main/main.tsx';
import {ReactElement} from 'react';

type AppProps = {
  countOffers: number;
}

function App({countOffers}: AppProps): ReactElement {
  return (<Main countOffers={countOffers}/>);
}

export default App;
