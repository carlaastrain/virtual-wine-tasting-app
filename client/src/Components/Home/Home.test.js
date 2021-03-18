/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  test('renders headings', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: 'Why this app?' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'EDUCATION' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'NOTEBOOK' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'JOYMENT' })
    ).toBeInTheDocument();
  });

  test('renders images', () => {
    render(<Home />);
    // screen.debug();
    // screen.getByRole('');

    expect(screen.getByRole('img', { name: 'education' })).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'note' })).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'joy' })).toBeInTheDocument();
  });

  test('renders first sentence of each block of text', () => {
    render(<Home />);

    expect(
      screen.getByText(
        /This app will introduce you in the art of wine tasting./
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The App provides a notebook for your tastings./)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/We are living in hard times .../)
    ).toBeInTheDocument();
  });
});
