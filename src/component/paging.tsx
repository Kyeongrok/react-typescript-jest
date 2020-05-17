import Election from "../domain/election";
import Statistics from "./statistics";
import React from "react";

const Paging = (props:{count:number, rowPerPage:number}) => {
  // 여기에서 click하면 App의 from, to가 바뀐다.
  return(
    <div>
      {props.rowPerPage}
      <ul>
        <li>1</li>
      </ul>
    </div>
  )
}
export default Paging