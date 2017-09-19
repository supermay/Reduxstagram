import React from 'react';
import Photo from './Photo';
const PhotoGrid = React.createClass({
  render(){
    return(
      <div className="photo-grid">
        {/* iterate stuff and pass down props *** also set unique key and pay attention to index */}
        {this.props.posts.map((post,index) => <Photo key={index} index={index} post={post} {...this.props} />)}
      </div>
    )
  }
});

export default PhotoGrid;
