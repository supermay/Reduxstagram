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
      </div>
    )
  }
})
export default Comments;
