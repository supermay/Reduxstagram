// a reducer takes in two things:
// 1. the action, 2. copy of current state

// es6 default parameters
function posts(state = [], action){
  console.log(state, action);
  return state
}

export default posts;
