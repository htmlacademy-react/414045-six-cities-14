import {ThreeCircles} from 'react-loader-spinner';

import './spinner.css';

export default function Spinner() {
  return (
    <div className='spinner-container'>
      <ThreeCircles/>
      <p>Loading...</p>
    </div>
  );
}
