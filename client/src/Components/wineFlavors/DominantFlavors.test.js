/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DominantFlavors from './DominantFlavors';

const updateDominantFlavors = jest.fn();

const grape = 'grape';
const malbec = {
  grape: ['Malbec'],
  style: 'Red',
  drinkingTemperature: 'Room Temperature',
  countries: [
    'Argentina',
    'France',
    'Chile',
    'USA',
    'South Africa',
    'Australia',
    'Italy',
  ],
  dominantFlavors: ['Plum', 'Blueberry', 'Vanilla', 'Tabacco', 'Cocoa'],
  possibleFlavors: {
    fruits: ['Cherry', 'Black Raspberry'],
    dryFruits: ['Raisin', 'Prune'],
    florals: ['Wild Iris'],
    herbs: ['Sage', 'Yerba Mate'],
    spices: ['Cinnamon', 'Baking Spices', 'Milk Chocolate'],
    earthFlavors: ['Clay Pot'],
    others: [],
  },
};

const wineDB = { grape: malbec };

describe('DominantFlavors', () => {
  test('renders heading and button', () => {
    render(
      <DominantFlavors
        updateDominantFlavors={updateDominantFlavors}
        grape={grape}
        wineDB={wineDB}
      />
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders dominant flavours of grape', () => {
    render(
      <DominantFlavors
        updateDominantFlavors={updateDominantFlavors}
        grape={grape}
        wineDB={wineDB}
      />
    );
    expect(screen.getByText('Plum')).toBeInTheDocument();
    expect(screen.getByText('Blueberry')).toBeInTheDocument();
    expect(screen.getByText('Vanilla')).toBeInTheDocument();
    expect(screen.getByText('Tabacco')).toBeInTheDocument();
    expect(screen.getByText('Cocoa')).toBeInTheDocument();
  });

  test('click on next button calls function updateDominantFlavors', async () => {
    render(
      <DominantFlavors
        updateDominantFlavors={updateDominantFlavors}
        grape={grape}
        wineDB={wineDB}
      />
    );
    const next = screen.getByRole('button');
    await fireEvent.click(next);
    expect(updateDominantFlavors).toHaveBeenCalled();
  });

  test('toggle the background color of a flavor between white and green on click', async () => {
    render(
      <DominantFlavors
        updateDominantFlavors={updateDominantFlavors}
        grape={grape}
        wineDB={wineDB}
      />
    );
    const plum = screen.getByText('Plum');
    await fireEvent.click(plum);
    expect(plum).toHaveClass('dominant__flavors__box__toggled');
    await fireEvent.click(plum);
    expect(plum).toHaveClass('dominant__flavors__box');
  });
});
