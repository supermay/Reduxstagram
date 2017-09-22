import React from 'react';
import Photo from './Photo'
// import comments
import Comments from './Comments'

const Single = React.createClass({
  render(){
    // index of the post. get from url => this.props.params
    const { postId } = this.props.params;
    const index = this.props.posts.findIndex((post) => post.code === postId );
    // get us the post
    const post = this.props.posts[index];
    // not every post has comments, need to fix it
    const postComments = this.props.comments[postId] || [];

    return(
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} />
      </div>
    )
  }
});

export default Single;
