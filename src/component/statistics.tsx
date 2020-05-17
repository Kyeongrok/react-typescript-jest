// @ts-ignore
import React, {Component} from "react";
import Election from "../domain/election";
import '../css/election.css'
import '../css/paging.css'
import Paging from "./paging";

const TrRow = (props:{row:Election}) => {
  const row = props.row;
  return(
    <tr>
      <td>{row['지역명']}</td>
      <td>{row['선거구_시도명']}</td>
      <td>{row['선거인수']}</td>
      <td>{row['읍면동명']}</td>
      <td>{row['투표구명']}</td>
      <td>{row['투표수']}</td>
    </tr>
  )
}

// props에 무엇이 들어올지 모른다는 risk가 있다.
const Statistics = (props:{rows:Array<Election>}) => {
  return (
    <div className={'outter_box'}>
      <table>
        <tbody>
          <tr>
            <th>지역명</th>
            <th>선거구_시도명</th>
            <th>선거인수</th>
            <th>읍면동명</th>
            <th>투표구명</th>
            <th>투표수</th>
          </tr>
          {props.rows.map((row, idx) => {
            return <TrRow key={idx} row={row}></TrRow>
          })}
        </tbody>
      </table>
    </div>
  )
}


export default Statistics
