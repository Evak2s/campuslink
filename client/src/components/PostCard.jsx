import { useState } from "react";

import {
  doc,
  updateDoc,
  arrayUnion,
  increment,
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase";

function PostCard({
  post,
  profile,
  setSelectedUser
}) {

  const [likes, setLikes] =
    useState(post.likes || 0);

  const [comments, setComments] =
    useState(post.comments || []);

  const [comment, setComment] =
    useState("");

  const [liked, setLiked] =
    useState(false);

  // ❤️ LIKE
  async function handleLike() {

    if (liked) return;

    try {

      await updateDoc(
        doc(db, "posts", post.id),
        {
          likes: increment(1)
        }
      );

      setLikes(likes + 1);
      setLiked(true);

      await addDoc(collection(db, "notifications"), {
        from: profile.username,
        text: `a aimé ton post : "${post.text.slice(0, 25)}..." ❤️`,
        createdAt: serverTimestamp()
      });

    } catch (error) {
      console.log(error);
    }
  }

  // 💬 COMMENTAIRE
  async function addComment() {

    if (!comment.trim()) return;

    const newComment = {
      user: profile.username,
      text: comment
    };

    try {

      await updateDoc(
        doc(db, "posts", post.id),
        {
          comments: arrayUnion(newComment)
        }
      );

      setComments([...comments, newComment]);
      setComment("");

      await addDoc(collection(db, "notifications"), {
        from: profile.username,
        text: `a commenté : "${comment.slice(0, 25)}..." 💬`,
        createdAt: serverTimestamp()
      });

    } catch (error) {
      console.log(error);
    }
  }

  function renderAvatar() {

    if (post.photo) {

      return (
        <img
          className="avatar"
          src={post.photo}
          alt=""
        />
      );
    }

    return (
      <div className="avatar-letter">
        {post.user?.charAt(0)?.toUpperCase() || "K"}
      </div>
    );
  }

  return (

    <div className="post-card">

      <div className="post-header">

        {renderAvatar()}

        <div>

          <h3
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedUser(post)}
          >
            {post.user}
          </h3>

          <p>
            {post.mbti} • {post.degree}
          </p>

        </div>

      </div>

      <div className="post-tag">
        {post.tag}
      </div>

      {post.image && (
        <img
          className="post-image"
          src={post.image}
          alt=""
        />
      )}

      <p className="post-text">
        {post.text}
      </p>

      <div className="post-actions">

        <button onClick={handleLike}>
          ❤️ {likes}
        </button>

        <button>
          💬 {comments.length}
        </button>

      </div>

      <div className="comments">

        {comments.map((c, i) => (
          <div key={i} className="comment">
            <strong>{c.user}:</strong> {c.text}
          </div>
        ))}

      </div>

      <div className="comment-box">

        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Ajouter un commentaire..."
        />

        <button onClick={addComment}>
          ➤
        </button>

      </div>

    </div>
  );
}

export default PostCard;