import React from "react";

function VideoDetails({ title, views, uploadDate, upvotes, downvotes, onUpvote, onDownvote }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{views} views | Uploaded {uploadDate}</p>
      <button onClick={onUpvote}>👍 {upvotes}</button>
      <button onClick={onDownvote}>👎 {downvotes}</button>
    </div>
  );
}

export default VideoDetails;
