import {
  useState
} from "react";

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

  function addComment() {

    if (!comment.trim())
      return;

    setComments([
      ...comments,
      `${profile.username} : ${comment}`
    ]);

    setComment("");
  }

  function renderAvatar() {

    if (
      post.photo &&
      typeof post.photo === "string"
    ) {

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

        {
          post.user
            ? post.user
                .charAt(0)
                .toUpperCase()
            : "K"
        }

      </div>
    );
  }

  return (

    <div className="post-card">

      <div className="post-header">

        {renderAvatar()}

        <div>

          <h3
            style={{
              cursor: "pointer"
            }}

            onClick={() =>
              setSelectedUser(post)
            }
          >
            {post.user}
          </h3>

          <p>

            {post.mbti}

            {" • "}

            {post.degree}

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

        <button
          onClick={() =>
            setLikes(likes + 1)
          }
        >
          ❤️ {likes}
        </button>

        <button>
          💬 {comments.length}
        </button>

        <button>
          🔖
        </button>

      </div>

      <div className="comments">

        {comments.map(
          (c, index) => (

            <div
              key={index}
              className="comment"
            >
              {c}
            </div>

          )
        )}

      </div>

      <div className="comment-box">

        <input
          type="text"
          placeholder="Ajouter un commentaire..."
          value={comment}
          onChange={(e) =>
            setComment(
              e.target.value
            )
          }
        />

        <button
          onClick={addComment}
        >
          ➤
        </button>

      </div>

    </div>
  );
}

export default PostCard;