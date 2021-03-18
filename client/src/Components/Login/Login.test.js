import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';
import * as ApiService from '../ApiService';

// intercepting the API services
jest.mock('../ApiService');

const fakeUsers = [{ id: 1, mail: 'alain', password: '1234' }];

// mocking the get users API request
ApiService.getUsers = () => {
  return fakeUsers;
};

// mocking the login function
const loginUser = jest.fn(() => { });

describe('Login', () => {
  test('renders Login component by text', async () => {
    // passing the mocked login function as a prop
    render(<Login loginUser={loginUser} />);


    const username = screen.getByPlaceholderText('Type in your user name ...');
    const password = screen.getByPlaceholderText('Type in your password ...');

    fireEvent.change(username, {
      target: { value: 'alain' },
    });
    fireEvent.change(password, {
      target: { value: '1234' },
    });

    const login = screen.getByText('login');
    await fireEvent.click(login);




    // Andrew's wizardry based on API async bugs
    jest.useFakeTimers();
    await setTimeout(() => {
      expect(loginUser).toHaveBeenCalled();
    }, 1000);
    jest.runAllTimers();
  });
});
