import React from 'react';

const pagingFromTo = (pageNo:number, rowsPerPage:number) => {
  const from = (pageNo - 1) * rowsPerPage;
  return [from, from + rowsPerPage - 1]
}

test('paging test', () => {
  expect(pagingFromTo(1, 10)).toEqual([0, 9]);
});