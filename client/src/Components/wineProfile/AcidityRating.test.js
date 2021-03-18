/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import AcidityRating from './AcidityRating';

const acidity = 0;
const updateAcidity = jest.fn();

describe('AcidityRating', () => {
  test('renders heading', () => {
    render(<AcidityRating acidity={acidity} updateAcidity={updateAcidity} />);
    // screen.debug();
    // screen.getByRole('');
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('renders first sentence of paragraph', () => {
    render(<AcidityRating acidity={acidity} updateAcidity={updateAcidity} />);
    expect(
      screen.getByText(
        /Acids are the primary attribute that contributes to wine's tart and sour flavor./
      )
    ).toBeInTheDocument();
  });

  test('renders lemon icon', () => {
    render(<AcidityRating acidity={acidity} updateAcidity={updateAcidity} />);
    // screen.debug();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  // test('renders 4 stars rating', async () => {
  //   render(<AcidityRating acidity={acidity} updateAcidity={updateAcidity} />);
  //   // screen.getByRole('');
  //   screen.debug();

  //   const fourStars = screen.getByDisplayValue('4');
  //   await fireEvent.change(fourStars, { target: { value: '4' } });
  //   // await fireEvent.click(fourStars);
  //   expect(updateAcidity).toHaveBeenCalled();
  // });

  // test('renders wine info', () => {
  //   render(<AcidityRating acidity={acidity} updateAcidity={updateAcidity} />);

  //   expect(screen.getByText('finca')).toBeInTheDocument();
  //   expect(screen.getByText('1930')).toBeInTheDocument();
  //   expect(screen.getByText('pinotnoir')).toBeInTheDocument();
  // });

  // test('call deleteTasting API function', async () => {
  //   render(<AcidityRating acidity={acidity} updateAcidity={updateAcidity} />);

  //   const deleteAction = screen.getByRole('img', { name: 'bin delete sybol' });
  //   await fireEvent.click(deleteAction);
  //   expect(ApiService.deleteTasting).toHaveBeenCalled();
  // });
});
