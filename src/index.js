import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App.jsx';
import store from './store';

import { inc, dec } from './actions'

store.subscribe(() => {
  console.log("store changed", store.getState());
})

// Basic actions to understand reducer and action comms
// store.dispatch(inc(5))
// store.dispatch(inc(1))
// store.dispatch(inc(2))
//
// store.dispatch(dec(2))
// store.dispatch(dec(1))
// store.dispatch(dec(5))

// Basic fetch operations to some api
store.dispatch((dispatch) => {
    dispatch({type:'FETCH_DATA'})
    axios.get('https://rydeboard-dev.now.sh/api/rides')
    .then((response) => {
        dispatch({type:'FETCH_DATA_COMPLETE', payload:response})
    })
    .catch((err) => {
        dispatch({type:'FETCH_DATA_ERROR', payload:err})
    })
})

ReactDOM.render(<App />, document.getElementById('root'));
