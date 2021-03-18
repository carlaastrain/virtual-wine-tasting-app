/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import WineList from './WineList';
import ApiService from '../ApiService';

const user = {
  userId: 1,
  mail: 'alain',
  password: '1234',
};

const pinot = {
  userId: 1,
  id: 1,
  year: 1930,
  winery: 'finca',
  grape: 'pinotnoir',
  fruit: '4',
  acidity: '4',
  tannins: '4',
  body: '1930',
  dominantFlavors: ['Rasberry', 'Mushroom', 'Clove'],
  arrPossibleFlavors: [['Hibiscus'], ['Milk Chocolate'], ['Tabacco']],
  overallRating: '3.5',
};

const criollo = {
  userId: 1,
  id: 3,
  year: 1934,
  winery: 'criollo',
  grape: 'riesling',
  fruit: '3.5',
  acidity: '4',
  tannins: '3.5',
  body: '1934',
  dominantFlavors: ['Beeswax', 'Jasmine', 'Petroleum'],
  arrPossibleFlavors: [['Star Fruit'], ['White Cherry'], ['Nectarine']],
  overallRating: '3.5',
};

const wineList = [
  {
    userId: 1,
    id: 1,
    year: 1930,
    winery: 'finca',
    grape: 'pinotnoir',
    fruit: '4',
    acidity: '4',
    tannins: '4',
    body: '1930',
    dominantFlavors: ['Rasberry', 'Mushroom', 'Clove'],
    arrPossibleFlavors: [['Hibiscus'], ['Milk Chocolate'], ['Tabacco']],
    overallRating: '3.5',
  },
  {
    userId: 1,
    id: 3,
    year: 1934,
    winery: 'criollo',
    grape: 'riesling',
    fruit: '3.5',
    acidity: '4',
    tannins: '3.5',
    body: '1934',
    dominantFlavors: ['Beeswax', 'Jasmine', 'Petroleum'],
    arrPossibleFlavors: [['Star Fruit'], ['White Cherry'], ['Nectarine']],
    overallRating: '3.5',
  },
];

jest.mock('../ApiService', () => ({
  getTastings: () => Promise.resolve(wineList),
}));

describe('WineList', () => {
  test('renders wine list container', async () => {
    render(<WineList user={user} />);
    screen.debug();
  });
});
