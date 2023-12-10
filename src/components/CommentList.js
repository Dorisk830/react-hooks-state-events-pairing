import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <CommentItem key={comment.id} username={comment.username} text={comment.text} />
      ))}
    </div>
  );
}

export default CommentList;
