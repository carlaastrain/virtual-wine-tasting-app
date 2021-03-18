/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import WineTasting from './WineTasting';
import userEvent from '@testing-library/user-event';

const user = {
  userId: 1,
  mail: 'alain',
  password: '1234',
};

describe('WineTasting', () => {
  test('renders input field, dropdown and button in component', () => {
    render(<WineTasting user={user} />);
    // screen.debug();
    // screen.getByRole('');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'select grape variety' })
    ).toBeInTheDocument();
  });

  test('renders name of winery on input change', () => {
    render(<WineTasting user={user} />);
    const wineryName = screen.getByPlaceholderText(
      'Type in name of winery ...'
    );
    fireEvent.change(wineryName, {
      target: { value: 'chateau margot' },
    });
    expect(wineryName).toHaveValue('chateau margot');
  });

  test('simulates selection of grape variety in dropdown menu', () => {
    render(<WineTasting user={user} />);

    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 'malbec' },
    });
    let options = screen.getAllByTestId('select-option');
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });
});
