import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {City} from '../types/offer.ts';

export default function useMap(mapRef:MutableRefObject<HTMLElement|null>, city:City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const instanceMap = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instanceMap.addLayer(layer);

      setMap(instanceMap);
      isRenderRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
