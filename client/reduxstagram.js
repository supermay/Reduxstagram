import React from 'react';

import { render } from 'react-dom';

// import CSS --- webpack will deal with it
import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// pass the store
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' components={App}>
      {/* nest routes here */}
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Route>
   </Router>
  </Provider>
)

// pass this.props.children here => or have the router here
render(router,document.getElementById('root'));
