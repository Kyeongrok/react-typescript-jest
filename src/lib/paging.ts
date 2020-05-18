const pagingFromTo = (pageNo:number, rowsPerPage:number) => {
  const from = (pageNo - 1) * rowsPerPage;
  return [from, from + rowsPerPage - 1]
}

export default pagingFromTo