import React from 'react';
import Photo from './Photo'
// import comments

const Single = React.createClass({
  render(){
    // index of the post. get from url => this.props.params
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId );
    // get us the post
    const post = this.props.posts[index];

    return(
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
      </div>
    )
  }
});

export default Single;
