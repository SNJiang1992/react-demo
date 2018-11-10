import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'

store.subscribe(function(){
    ReactDOM.render(<App num={store.getState().num}/>, document.getElementById('root'));  
})


ReactDOM.render(<App num={store.getState().num}/>, document.getElementById('root'));
