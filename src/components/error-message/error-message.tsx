import {useAppSelector} from '../../hooks/hooks.ts';
import {getError} from '../../store/error/error-selector.ts';

import './error-message.css';

export default function ErrorMessage() {
  const error = useAppSelector(getError);

  return error ? <div className='error-message'><p>{error}</p></div> : null;
}
