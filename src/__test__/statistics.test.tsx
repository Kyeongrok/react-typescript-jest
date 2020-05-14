import React from 'react';
import { render } from '@testing-library/react';

test('type test', () => {
  expect(10).toBe(10)

});

test('object assignment', () => {
  const data = {'one': 1, 'two': 2};
  expect(data).toEqual({one: 1, two: 2});
});

