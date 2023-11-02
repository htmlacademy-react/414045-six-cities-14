import {ReactElement, useEffect, useRef} from 'react';
import {City, MapPoint} from '../../types/offer.ts';
import useMap from '../../hooks/use-map.tsx';
import {Icon, layerGroup, Marker} from 'leaflet';
import {URL_MARKER_DEFAULT} from '../../consts.ts';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: MapPoint[];
  selectedPoint: MapPoint;
}

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({city, points, selectedPoint}:MapProps):ReactElement {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker.setIcon(defaultIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return(
    <section className="cities__map map" ref={mapRef}></section>
  );
}
