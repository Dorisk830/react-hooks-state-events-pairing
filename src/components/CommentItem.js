import React from "react";

function CommentItem({ username, text }) {
  return (
    <div>
      <strong>{username}:</strong> {text}
    </div>
  );
}

export default CommentItem;
