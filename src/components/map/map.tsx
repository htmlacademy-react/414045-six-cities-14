import {ReactElement, useEffect, useRef} from 'react';
import {City, MapPoint, Offer} from '../../types/offer.ts';
import useMap from '../../hooks/use-map.tsx';
import {Icon, LatLng, layerGroup, Marker} from 'leaflet';
import {URL_MARKER_DEFAULT, City as CityName} from '../../consts.ts';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: string;
  offers: Offer[];
  city: City;
}

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function getCityPoints(cityName: CityName, offers: Offer[]): MapPoint[] {
  const points: MapPoint[] = [];

  offers.forEach((offer) => {
    if (offer.city.name === cityName) {
      points.push(offer.location);
    }
  });

  return points;
}

export default function Map({className, city, offers}: MapProps): ReactElement {
  const points = getCityPoints(city.name, offers);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const {latitude, longitude, zoom} = city.location;
      const markerLayer = layerGroup().addTo(map);

      map.setView(new LatLng(latitude, longitude), zoom);
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
  }, [map, city, points]);

  return (
    <section className={className} ref={mapRef}></section>
  );
}
