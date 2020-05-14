// @ts-ignore
import React, {Component} from "react";

type Statistics = {
  rows:Array<Object>
}

const TrRow = (props:{row:Object}) => {
  const row = props.row;
  console.log('=>', row)
  return(
    <tr>
      <td>{"1st column"}</td>
      <td></td>
      <td></td>
    </tr>
  )
}

// props에 무엇이 들어올지 모른다는 risk가 있다.
const Statistics = (props:Statistics) => {
  console.log(props.rows);
  return (
    <div className={'outter_box'}>
      <table>
        <tbody>
          <tr>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
          </tr>
          {
            props.rows.map((row, idx) => <TrRow key={idx} row={row}></TrRow>)
          }
        </tbody>
      </table>
    </div>
  )
}


export default Statistics
