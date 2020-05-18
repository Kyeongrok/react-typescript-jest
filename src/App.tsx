import React, {Component, FC, useEffect, useState} from 'react';
import './css/App.css';
import axios from 'axios'
import Statistics from './component/statistics'
import Election from "./domain/election";
import Paging from "./component/paging";
import pagingFromTo from "./lib/paging";

const App:FC = () =>{
  const apiCall = (recentPage:number, rowsPerPage:number) => {
    const ft = pagingFromTo(recentPage, rowsPerPage);
    const from = ft[0];
    const to = ft[1];
    axios(`https://jxkjd9ecxh.execute-api.ap-northeast-2.amazonaws.com/dev/v1/find/election21/full?from=${from}&to=${to}`)
      .then((res) => {
        const data = res.data.data.map((v:any, k:number) => new Election(v))
        setData(data)
        setPagingTotalCount(res.data.paging.total)
      });

  }

  const handleChangePage = (pageNo:number): void => {
    console.log("------", pageNo);
    setRecentpage(pageNo);
  }

  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [pagingTotalCount, setPagingTotalCount] = useState(0);
  const [recentPage, setRecentpage] = useState(1);
  const handleChangeResPerPage = (e:any) => {
    return setRowsPerPage(parseInt(e.target.value));
  }

  useEffect(() => {
    apiCall(recentPage, rowsPerPage);
  }, [rowsPerPage, recentPage]);


  return (
      <div className="App">
        <header className="App-header">
          <p>제 21대 국회의원 선거 데이터 조회</p>
          <select onChange={(e)=>handleChangeResPerPage(e)}>
            <option value="15">15개씩 보기</option>
            <option value="30">30개씩 보기</option>
            <option value="45">45개씩 보기</option>
          </select>
          <Statistics rows={data} />
          <Paging numberOfPages={ Math.floor(pagingTotalCount / rowsPerPage)} recentPage={recentPage} handleChangePage={handleChangePage} />
        </header>
      </div>
  );
}

export default App;
