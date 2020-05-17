import React from "react";
import '../css/paging.css';

interface Paging {
  handleChangePage:(pageNo:number)=>void,
  count:number,
  rowPerPage:number
}


const Paging = (props:Paging) => {
  // 여기에서 click하면 App의 from, to가 바뀐다.
  return(
    <div>
      {props.rowPerPage}
      <ul>
        <li onClick={() => props.handleChangePage(1)}>1</li>
        <li onClick={() => props.handleChangePage(2)}>2</li>
      </ul>
    </div>
  )
}
export default Paging