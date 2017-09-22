import React from 'react';
// click the name and redirect you to the home page, so make it as a link
import { Link } from 'react-router';

const Main = React.createClass({
  render(){
    return(
      <div>
        {/* still not work yet, only set up link, we need set up router */}
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
        {/* this will be populated by router */}
        {/* {this.props.children}, will pass all the props from state to children */}
        {React.cloneElement(this.props.children,this.props)}
      </div>
    )
  }
});

export default Main;
