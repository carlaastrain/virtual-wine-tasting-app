/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import TanninsRating from './TanninsRating';

const tannins = 0;
const updateTannins = jest.fn();

describe('TanninsRating', () => {
  test('renders heading', () => {
    render(<TanninsRating tannins={tannins} updateTannins={updateTannins} />);
    // screen.debug();
    // screen.getByRole('');
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('renders first sentence of paragraph', () => {
    render(<TanninsRating tannins={tannins} updateTannins={updateTannins} />);
    expect(
      screen.getByText(
        /To taste tannin in wine, focus on the texture on your toungue./
      )
    ).toBeInTheDocument();
  });

  test('renders wine barrel icon', () => {
    render(<TanninsRating tannins={tannins} updateTannins={updateTannins} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
