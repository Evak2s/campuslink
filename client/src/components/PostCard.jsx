import { useState } from "react";

function PostCard({
  post,
  posts,
  setPosts,
  index,
  setSelectedUser
}) {

  const [comment, setComment]
    = useState("");

  return (

    <div className="post-card">

      <div
        className="post-user"

        onClick={() =>
          setSelectedUser(post)
        }
      >

        <img
          className="mini-avatar"
          src={post.avatar}
          alt=""
        />

        <div>

          <strong>
            {post.user}
            {" • "}
            {post.mbti}
          </strong>

          <span>
            3 amis en commun
          </span>

        </div>

      </div>

      <div className="tags">
        <span>{post.tag}</span>
      </div>

      <img
        className="post-image"
        src={post.image}
        alt=""
      />

      <p>
        {post.text}
      </p>

      <div className="post-actions">

        <button

          onClick={() => {

            const updated = [
              ...posts
            ];

            updated[index]
              .likes += 1;

            setPosts(updated);
          }}
        >
          ❤️ {post.likes}
        </button>

        <button>
          💬 {post.comments.length}
        </button>

        <button>
          🔖
        </button>

      </div>

      <div className="comments">

        {post.comments.map(
          (c, i) => (

            <div
              className="comment"
              key={i}
            >
              {c}
            </div>

          )
        )}

        <div className="comment-form">

          <input
            type="text"

            placeholder=
              "Ajouter un commentaire..."

            value={comment}

            onChange={(e) =>
              setComment(
                e.target.value
              )
            }
          />

          <button

            onClick={() => {

              if (
                comment.trim() === ""
              )
                return;

              const updated = [
                ...posts
              ];

              updated[index]
                .comments.push(comment);

              setPosts(updated);

              setComment("");
            }}
          >
            ➤
          </button>

        </div>

      </div>

    </div>
  );
}

export default PostCard;