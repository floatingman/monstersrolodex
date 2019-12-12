import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, getAllByTestId } = render(<App />);
  const cards = getAllByTestId('.card-list')
  const linkElement = getByText(/learn react/i);
  expect(components).toBeGreaterThan(0);
  expect(linkElement).toBeInTheDocument();
});
