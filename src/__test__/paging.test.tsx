import React from 'react';
import pagingFromTo from "../lib/paging";

test('paging test', () => {
  expect(pagingFromTo(1, 10)).toEqual([0, 9]);
});