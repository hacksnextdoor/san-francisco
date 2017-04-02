import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './store'

import { inc, dec } from './actions'

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch(inc(5))
store.dispatch(inc(1))
store.dispatch(inc(2))

store.dispatch(dec(2))
store.dispatch(dec(1))
store.dispatch(dec(5))

ReactDOM.render(<App />, document.getElementById('root'));
