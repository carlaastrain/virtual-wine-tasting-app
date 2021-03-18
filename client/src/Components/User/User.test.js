/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import User from './User';

const user = {
  userId: 1,
  mail: 'alain',
  password: '1234',
};

describe('User', () => {
  test('renders User component', () => {
    render(<User user={user} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('renders user name and id', () => {
    render(<User user={user} />);
    expect(screen.getByText(/alain/i)).toBeInTheDocument();
    expect(screen.getByText('userId: 1')).toBeInTheDocument();
  });

  // test('reloads page on log out', async () => {
  //   render(<User user={user} />);
  //   const logout = screen.getByText('logout here');
  //   fireEvent.click(logout);

  //   expect(await screen.findByText('User Login')).toBeInTheDocument();
  //   screen.debug();
  // });
});
