/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import FruitRating from './FruitRating';

const fruit = 0;
const updateFruit = jest.fn();

describe('FruitRating', () => {
  test('renders heading', () => {
    render(<FruitRating fruit={fruit} updateFruit={updateFruit} />);
    // screen.debug();
    // screen.getByRole('');
    expect(
      screen.getByRole('heading', {
        name: 'rate here',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'rate fruit/sweet character of the wine',
      })
    ).toBeInTheDocument();
  });

  test('renders first sentence of paragraph after 2 seconds timeout', () => {
    render(<FruitRating fruit={fruit} updateFruit={updateFruit} />);
    // TIMEOUT in the CODE
    expect(
      screen.queryByText(
        /Sweetness in Wine is derived from residual sugar (RS)./
      )
    ).toBeNull();

    setTimeout(() => {
      expect(
        screen.getByText(
          /Sweetness in Wine is derived from residual sugar (RS)./
        )
      ).toBeInTheDocument();
    }, 3000);
  });

  test('renders bag icon', () => {
    render(<FruitRating fruit={fruit} updateFruit={updateFruit} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
