/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import WineCard from './WineCard';
import ApiService from '../ApiService';

const wine = {
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

jest.mock('../ApiService');

ApiService.deleteTasting.mockResolvedValue(wine.id);

describe('WineCard', () => {
  test('renders WineCard component', () => {
    render(<WineCard wine={wine} />);
  });

  test('renders delete icon', () => {
    render(<WineCard wine={wine} />);

    expect(
      screen.getByRole('img', { name: 'bin delete sybol' })
    ).toBeInTheDocument();
  });

  test('renders bottle icon', () => {
    render(<WineCard wine={wine} />);
    expect(screen.getByRole('img', { name: 'bottle' })).toBeInTheDocument();
  });

  test('renders 4 stars rating', () => {
    render(<WineCard wine={wine} />);
    expect(screen.getByRole('img', { name: '4 Stars' })).toBeInTheDocument();
  });

  test('renders wine info', () => {
    render(<WineCard wine={wine} />);
    expect(screen.getByText('finca')).toBeInTheDocument();
    expect(screen.getByText('1930')).toBeInTheDocument();
    expect(screen.getByText('pinotnoir')).toBeInTheDocument();
  });

  test('call deleteTasting API function', async () => {
    render(<WineCard wine={wine} />);
    const deleteAction = screen.getByRole('img', { name: 'bin delete sybol' });
    await fireEvent.click(deleteAction);
    expect(ApiService.deleteTasting).toHaveBeenCalled();
  });
});
