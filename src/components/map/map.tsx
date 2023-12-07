import {ReactElement, useEffect, useRef} from 'react';
import {City, MapPoint, Offer} from '../../types/offer.ts';
import useMap from '../../hooks/use-map.tsx';
import {Icon, LatLng, layerGroup, Marker} from 'leaflet';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getActiveMapPoint} from '../../store/offer/offer-selector.ts';

import 'leaflet/dist/leaflet.css';

const SRC_MARKER_DEFAULT = 'img/pin.svg';
const SRC_ACTIVE_MARKER = 'img/pin-active.svg';

const DEFAULT_ZOOM = 13;

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

function getCityPoints(offers: Offer[]): MapPoint[] {
  const points: MapPoint[] = [];

  offers.forEach((offer) => {
    points.push(offer.location);
  });

  return points;
}

function isLocationInOneCity(offers: Offer[]) {
  const cities = new Set();

  offers.forEach((offer) => cities.add(offer.city.name));

  return cities.size <= 1;
}

export default function Map({className, city, offers}: MapProps): ReactElement {
  const points = getCityPoints(offers);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const activePoint = useAppSelector(getActiveMapPoint);
  const markers = useRef<Marker[]>([]);

  useEffect(() => {
    if (map) {
      const {latitude, longitude} = city.location;
      const markerLayer = layerGroup().addTo(map);
      const preparedZoom = isLocationInOneCity(offers) ? DEFAULT_ZOOM : 4;

      map.setView(new LatLng(latitude, longitude), preparedZoom);
      points.forEach((point) => {
        const icon = point === activePoint ? activeIcon : defaultIcon;
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
  }, [map, city, points, offers, activePoint]);

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
    <section className={className} ref={mapRef} data-testid="map"></section>
  );
}
