import {renderHook} from '@testing-library/react';
import useMap from './use-map.tsx';
import {MutableRefObject} from 'react';
import {makeFakeCity} from '../mocks/mocks.ts';
import {Map} from 'leaflet';

describe('Hook: UseMap', () => {
  it('should return Map', () => {
    const mapRef: MutableRefObject<HTMLElement> = {
      current: document.createElement('div')
    };
    const mockCity = makeFakeCity();
    const {result} = renderHook(() => useMap(mapRef, mockCity));

    expect(result.current).toBeInstanceOf(Map);
  });
});
