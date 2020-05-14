import React, {Component} from 'react';
import logo from './logo.svg';
import './css/picture.css'
import girlfriend from './static/girlfriend.png'
import './App.css';
import axios from 'axios'
import Statistics from './component/statistics'

class App extends Component{

  state = {
    data:[]
  }
  componentDidMount(): void {
    const from = 0;
    const to = 1;
    axios.get(`https://jxkjd9ecxh.execute-api.ap-northeast-2.amazonaws.com/dev/v1/find/election21/full?from=${from}&to=${to}`)
      .then((res) => {
        this.setState({data:res.data})
      })
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    console.log(typeof this.state.data);
    // console.log(JSON.parse(this.state.data))
    return (
        <div className="App">
          <header className="App-header">
            <p>Election 21</p>
            number of records = {this.state.data.length}
            <Statistics rows={this.state.data} />
          </header>
        </div>
    );
  }

}

export default App;
