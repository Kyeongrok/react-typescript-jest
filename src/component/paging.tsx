import React, {useEffect, useState} from "react";
import '../css/paging.css';

interface Paging {
  handleChangePage:(pageNo:number)=>void,
  recentPage:number,
  numberOfPages:number
}

const Paging = (props:Paging) => {

  const [pages, setPages] = useState([0, 1]);
  const [startNum, setStartNum] = useState(1);

  const handleClickBefore = () => {
    const nextStartNum = startNum - 10;
    setStartNum(nextStartNum);
    props.handleChangePage(nextStartNum);
  }
  const handleClinkNext = () => {
    const nextStartNum = startNum + 10;
    setStartNum(nextStartNum);
    props.handleChangePage(nextStartNum);
  }
  const handleClickPageNo = (pageNo:number) => {
    props.handleChangePage(pageNo);
  }

  useEffect(() => {
    const pages = [];
    for (let i = startNum; i < startNum + 10 ; i += 1){
      pages.push(i);
    }
    setPages(pages);
  }, [props.recentPage, startNum]);

  return (
    <div>
      <ul>
        {startNum > 1?<p className={'before'} onClick={handleClickBefore}>before</p>:
          ""
        }
        {pages.map((value, idx) => {
          const pageNo = value;
          const color = pageNo === props.recentPage ? "red" : "white";
          return <li style={{color: color}} key={value} onClick={() => handleClickPageNo(pageNo)}>{pageNo}</li>
        })}
        {/*next를 누르면 다음 11 ~ 20까지 또 누르면 21 ~ 30까지 보인다.*/}
        <p className={'next'} onClick={handleClinkNext}>next</p>

      </ul>
    </div>
  );
}
export default Paging