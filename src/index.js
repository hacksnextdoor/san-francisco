import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './store'

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})

ReactDOM.render(<App />, document.getElementById('root'));
