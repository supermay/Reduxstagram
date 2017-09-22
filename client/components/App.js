import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


export function mapStateToProps(state){
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

// take state
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
