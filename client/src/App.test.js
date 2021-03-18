/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component by text', () => {
    render(<App />);
    expect(screen.getByText(/user login/i)).toBeInTheDocument();
    expect(screen.getByText('login')).toBeInTheDocument();
    expect(screen.getByText('to create a new user click')).toBeInTheDocument();
    expect(screen.getByText(/here/)).toBeInTheDocument();
  });

  test('renders App component by role', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('assert elements which shouldnt be there', () => {
    render(<App />);
    expect(screen.queryByText(/logout/i)).toBeNull();
    expect(screen.queryByText(/home/i)).toBeNull();
  });

  test('should go to the register page', async () => {
    render(<App />);
    const register = screen.getByText(/here/);
    fireEvent.click(register);
    expect(screen.getByText('Register new User')).toBeInTheDocument();
  });
});
