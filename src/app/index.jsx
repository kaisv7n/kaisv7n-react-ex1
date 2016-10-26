import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    this.setState({
      count : this.state.count + 1
    });
  }
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <div><button onClick={this.onClick}> click </button></div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
