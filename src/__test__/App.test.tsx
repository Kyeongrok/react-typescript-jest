import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/제 21대 국회의원 선거 데이터 조회/i);
  expect(linkElement).toBeInTheDocument();
});
