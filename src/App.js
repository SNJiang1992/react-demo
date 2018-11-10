import React, { Component } from 'react';
import store from './store'

let addNum = function (dispatch) {
  let action = {
    type:'add'
  }
  store.dispatch(action)
}

let subNum = function (dispatch) {
  let action = {
    type:'sub'
  }
  store.dispatch(action)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.num}
        <button onClick={addNum}>+</button>
        <button onClick={subNum}>-</button>
      </div>
    );
  }
}


export default App;
