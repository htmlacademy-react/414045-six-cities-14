import {useAppSelector} from '../../hooks/hooks.ts';

import './error-message.css';

export default function ErrorMessage() {
  const error = useAppSelector((store) => store.error);

  return error ? <div className='error-message'><p>{error}</p></div> : null;
}
