import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
        </a>
        </div>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">
          {props.message}
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;