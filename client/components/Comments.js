import React from 'react';

const Comments = React.createClass({
  renderComment(comment, index){
    return(
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times; </button>
        </p>
      </div>
    )
  },

  render(){
    return(
      <div className="comment">
        {this.props.postComments.map(this.renderComment)}
        <form red="commentForm" className="comment-form">
          <input type="text" ref='author' placeholder='author'/>
          <input type="text" ref='comment' placeholder='comment'/>
        </form>
      </div>
    )
  }
})
export default Comments;
