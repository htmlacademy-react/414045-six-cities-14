import {ReactElement, useEffect, useRef} from 'react';
import {City, MapPoint, Offer} from '../../types/offer.ts';
import useMap from '../../hooks/use-map.tsx';
import {Icon, LatLng, layerGroup, Marker} from 'leaflet';
import {CityName as CityName} from '../../consts.ts';

import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks/hooks.ts';

const SRC_MARKER_DEFAULT = 'img/pin.svg';
const SRC_ACTIVE_MARKER = 'img/pin-active.svg';

type MapProps = {
  className: string;
  offers: Offer[];
  city: City;
}

const defaultIcon = new Icon({
  iconUrl: SRC_MARKER_DEFAULT
});

const activeIcon = new Icon({
  iconUrl: SRC_ACTIVE_MARKER,
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
  const activePoint = useAppSelector((store) => store.activeMapPoint);
  const markers = useRef<Marker[]>([]);

  useEffect(() => {
    if (map) {
      const {latitude, longitude, zoom} = city.location;
      const markerLayer = layerGroup().addTo(map);

      map.setView(new LatLng(latitude, longitude), zoom);
      points.forEach((point) => {
        const icon = defaultIcon;
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker.setIcon(icon).addTo(markerLayer);
        markers.current.push(marker);
      });

      return () => {
        map.removeLayer(markerLayer);
        markers.current = [];
      };
    }
  }, [map, city, points]);

  useEffect(() => {
    if (map) {
      markers.current.forEach((marker) => {
        const latLng = marker.getLatLng();

        if (latLng.lng === activePoint?.longitude && latLng.lat === activePoint?.latitude) {
          marker.setIcon(activeIcon);
        } else if (marker.getIcon().options.iconUrl === SRC_ACTIVE_MARKER) {
          marker.setIcon(defaultIcon);
        }
      });
    }
  }, [map, activePoint]);

  return (
    <section className={className} ref={mapRef}></section>
  );
}
