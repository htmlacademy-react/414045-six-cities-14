import {Offer} from '../types/offer.ts';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city:  {
      location: {
        latitude: 51.2217,
        longitude: 6.77616,
        zoom: 10,
      },
      name: 'Dusseldorf',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'img/1.png',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Paris is known for its gorgeous, imposing monuments. These iconic structures, often an exemplar of a particular era in architecture, are one of the city\'s instantly recognizable elements. The preeminent of Paris\'s landmarks is the Eiffel Tower.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Anna',
    },
    id: 2,
    images: [
      'img/2.png',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 200,
    rating: 5,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.8504,
        longitude: 4.34878,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: 'Rome was called the “Eternal City” by the ancient Romans because they believed that no matter what happened in the rest of the world, the city of Rome would always remain standing. Exploring the city center by foot surrounded by glorious monuments and colossal remains takes you back in time to the “glory that was Rome”.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 6,
      isPro: true,
      name: 'Ares',
    },
    id: 3,
    images: [
      'img/3.png',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 250,
    rating: 2.9,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that\'s somehow all go yet relaxed.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 8,
      isPro: true,
      name: 'Frau Louisa',
    },
    id: 4,
    images: [
      'img/4.png',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 130,
    rating: 4.6,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
];


