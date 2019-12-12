import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, getByRole } = render(<App />);
  //const cards = getByRole('CardList')
  const linkElement = getByText(/Leanne Graham/i);
  //expect(cards).toBeGreaterThan(0);
  expect(linkElement).toBeInTheDocument();
});
