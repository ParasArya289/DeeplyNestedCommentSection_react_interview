import { useState } from "react";

export const CommentSection = ({ comment }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <h5
        style={{ cursor: comment.replies.length > 0 ? "pointer" : "text" }}
        onClick={() => setExpanded(!expanded)}
      >
        {comment.user} · {comment.comment}
        <span>{comment.replies.length > 0 && (expanded ? " ▲ " : " ▼  ")}</span>
      </h5>
      {expanded && (
        <div
          style={{
            paddingLeft: "20px"
          }}
        >
          {comment.replies.map((comment) => (
            <CommentSection key={comment.user} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
