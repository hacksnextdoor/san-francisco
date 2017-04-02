import React from 'react';
import { connect } from 'react-redux';
import { fetchMockUser } from '../actions'

/*
  connect(a,b)
  - a is for getting store values as prop (store >> props for this component)
  - b
*/
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    rides: {}
  }
})

export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchMockUser())
  }

  render() {
    const { user, rides } = this.props
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello</h1>
        <h3>Current User</h3>
        <div>{JSON.stringify(user)}</div>
      </div>
    );
  }
}
