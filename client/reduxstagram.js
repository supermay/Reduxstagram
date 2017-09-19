import React from 'react';

import { render } from 'react-dom';

// import CSS --- webpack will deal with it
import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path='/' components={Main}>
      {/* nest routes here */}
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Route>
  </Router>
)

// pass this.props.children here => or have the router here
render(router,document.getElementById('root'));
