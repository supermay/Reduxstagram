import React from 'react';
import { Link } from 'react-router';
// add animation
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render(){
    const { post, index, comments } = this.props;
    return(
      <figure className='grid-figure' key={this.props.index}>
        <div className="grid-photo-wrap">
          {/* redirect to pay => change url */}
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className='grid-photo' />
          </Link>
          {/* animation */}
          {/* <CSSTransitionGroup transitonName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className='likes-heart'>{post.likes}</span>
          </CSSTransitionGroup> */}
          {/* render other stuff of each post */}
          <figcaption>
            <p>{post.caption}</p>
            <div className="control-button">
              <button className="likes" onClick={this.props.increment.bind(null,index)}>&hearts; {post.likes}</button>
              <Link className='button' to={`/view/${post.code}`} >
                <span className="comment-count">
                  {/* check if comments are existing??? */}
                  <span className="speech-bubble"></span> {comments[post.code] ? comments[post.code].length : 0}
                </span>
              </Link>
            </div>
          </figcaption>
        </div>
      </figure>
    )
  }
});

export default Photo;
