import React, {Component} from 'react';
import './css/App.css';
import axios from 'axios'
import Statistics from './component/statistics'
import Election from "./domain/election";
import Paging from "./component/paging";

class App extends Component{
  state = {
    data:[],
    from:0,
    to:2,
    recentPage:1,
    pagingTotalCount:0,
    rowsPerPage:15,
  }
  apiCall = ():void => {
    const from = this.state.from;
    const to = from + this.state.rowsPerPage;
    axios.get(`https://jxkjd9ecxh.execute-api.ap-northeast-2.amazonaws.com/dev/v1/find/election21/full?from=${from}&to=${to}`)
      .then((res) => {
        const data = res.data.map((v:any, k:number) => new Election(v))
        this.setState({data:data, pagingTotalCount:data.length})
      })
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {

  }

  componentDidMount(): void {
    const from = this.state.from;
    const to = from + this.state.rowsPerPage;
    axios.get(`https://jxkjd9ecxh.execute-api.ap-northeast-2.amazonaws.com/dev/v1/find/election21/full?from=${from}&to=${to}`)
      .then((res) => {
        const data = res.data.data.map((v:any, k:number) => new Election(v))
        const total = res.data.total;
        this.setState({
          data:data,
          pagingTotalCount:total
        })
      })
  }

  handleChangeRecords = (e:any): void =>   {
    this.setState({rowsPerPage:e.target.value})
  }

  handleChangePage = (pageNo:number): void => {
    console.log("handleChangePage=>", pageNo);
    // this.setState({recentPage: pageNo});
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
        <div className="App">
          <header className="App-header">
            <p>Election 21</p>
            number of records = {this.state.data.length}
            <select onChange={this.handleChangeRecords.bind(this)}>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
            <Statistics rows={this.state.data} />
            <Paging handleChangePage={this.handleChangePage} count={this.state.pagingTotalCount} rowPerPage={this.state.rowsPerPage}/>
          </header>
        </div>
    );
  }
}

export default App;
