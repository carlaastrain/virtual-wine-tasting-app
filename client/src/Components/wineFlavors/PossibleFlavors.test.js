/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PossibleFlavors from './PossibleFlavors';

const updatePossibleFlavors = jest.fn();

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

describe('PossibleFlavors', () => {
  test('all possible flavors shall be rendered once or several times', () => {
    render(
      <PossibleFlavors
        updatePossibleFlavors={updatePossibleFlavors}
        grape={grape}
        wineDB={wineDB}
      />
    );

    expect(
      screen.getByRole('heading', { name: 'possible flavors in grape' })
    ).toBeInTheDocument();

    const fruitFlavor = screen.getAllByRole('heading', {
      name: 'fruit flavor',
    });
    expect(fruitFlavor).toHaveLength(2);

    const dryFruit = screen.getAllByRole('heading', {
      name: 'dry fruit flavor',
    });
    expect(dryFruit).toHaveLength(2);

    const floral = screen.getAllByRole('heading', {
      name: 'floral flavor',
    });
    expect(floral).toHaveLength(1);

    const herbal = screen.getAllByRole('heading', {
      name: 'herbal flavor',
    });
    expect(herbal).toHaveLength(2);

    const spice = screen.getAllByRole('heading', {
      name: 'spice flavor',
    });
    expect(spice).toHaveLength(3);

    const earth = screen.getAllByRole('heading', {
      name: 'eath flavor',
    });
    expect(earth).toHaveLength(1);
  });

  test('click on next button calls function updatePossibleFlavors', async () => {
    render(
      <PossibleFlavors
        updatePossibleFlavors={updatePossibleFlavors}
        grape={grape}
        wineDB={wineDB}
      />
    );
    const next = screen.getByRole('button');
    await fireEvent.click(next);
    expect(updatePossibleFlavors).toHaveBeenCalled();
  });

  test('toggle the background color of a flavor box between white and green', async () => {
    render(
      <PossibleFlavors
        updatePossibleFlavors={updatePossibleFlavors}
        grape={grape}
        wineDB={wineDB}
      />
    );
    const cherry = screen.getByText('Cherry');
    await fireEvent.click(cherry);
    expect(cherry).toHaveClass('toggled__flavor__box');
    await fireEvent.click(cherry);
    expect(cherry).toHaveClass('flavor__box');
  });
});
