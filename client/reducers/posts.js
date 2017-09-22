// a reducer takes in two things:
// 1. the action, 2. copy of current state

// es6 default parameters
function posts(state = [], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
      const i = action.index;
    // return updated state
    // now we return a new array
      console.log('this state',i)
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default:
    return state
  }
}

export default posts;
