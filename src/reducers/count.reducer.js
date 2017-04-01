export default (state={count:0}, action) => {
  switch(action.type) {
    case "INC": {
      console.log(action)
      return {count: state.count+action.payload.count};
      break;
    }
    case "DEC": {
      return {count: state.count-1};
      break;
    }
  }
  return state;
}
