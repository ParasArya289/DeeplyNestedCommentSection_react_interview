import { CommentSection } from "./Components/CommentSection";
import { comments } from "./db";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {comments.map((comment) => (
        <CommentSection key={comment.user} comment={comment} />
      ))}
    </div>
  );
}
