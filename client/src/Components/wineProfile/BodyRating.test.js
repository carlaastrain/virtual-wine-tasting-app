/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import BodyRating from './BodyRating';

const body = 0;
const updateBody = jest.fn();

describe('BodyRating', () => {
  test('renders heading', () => {
    render(<BodyRating body={body} updateBody={updateBody} />);
    // screen.debug();
    // screen.getByRole('');
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('renders first sentence of paragraph', () => {
    render(<BodyRating body={body} updateBody={updateBody} />);
    expect(
      screen.getByText(
        /Body is not a scientific term, but a categorization of stlye from lightes to boldest./
      )
    ).toBeInTheDocument();
  });

  test('renders wine glass icon', () => {
    render(<BodyRating body={body} updateBody={updateBody} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
