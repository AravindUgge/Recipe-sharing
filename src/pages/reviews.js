import { useState } from "react";
import "./styles/reviews.css";

export const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Delicious Spaghetti!",
      content: "Tried this recipe, and it was amazing! The sauce was rich and flavorful.",
      likes: 12,
      comments: ["I loved it too!", "Perfect for a weekend dinner."]
    },
    {
      id: 2,
      title: "Tasty Pancakes",
      content: "Fluffy and light! My kids couldn't get enough of them.",
      likes: 8,
      comments: ["Can't wait to try it!", "Best pancakes ever!"]
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleLike = (id) => {
    setReviews(reviews.map((review) =>
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    ));
  };

  const handleAddComment = (id) => {
    if (newComment.trim() === "") return;
    setReviews(reviews.map((review) =>
      review.id === id ? { ...review, comments: [...review.comments, newComment] } : review
    ));
    setNewComment("");
  };

  return (
    <div className="reviews-container">
      <h2>Recipe Reviews</h2>
      <h3>THIS IS FOR TESTING PURPOSE ONLY </h3>
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <h3 className="review-title">{review.title}</h3>
          <p className="review-content">{review.content}</p>
          <div className="review-actions">
            <button onClick={() => handleLike(review.id)}>
              ❤️ {review.likes} Likes
            </button>
          </div>
          <div className="comment-section">
            <h4>Comments</h4>
            {review.comments.map((comment, index) => (
              <p key={index} className="comment">• {comment}</p>
            ))}
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={() => handleAddComment(review.id)}>
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
