import { useState } from "react";

import Sidebar from "./Sidebar";
import PostCard from "./PostCard";
import Rightbar from "./Rightbar";
import Profile from "./Profile";
import Messages from "./Messages";

function Feed() {

  const [message, setMessage]
    = useState("");

  const [selectedImage, setSelectedImage]
    = useState(null);

  const [selectedUser, setSelectedUser]
    = useState(null);

  const [page, setPage]
    = useState("feed");

  const [posts, setPosts]
    = useState([
      {
        user: "Lina",

        mbti: "ENFP",

        avatar:
          "https://i.pravatar.cc/150?img=32",

        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

        text:
          "Ambiance calme aujourd’hui à la BU 📚",

        tag: "📍 Campus",

        likes: 24,

        comments: [
          "J’arrive 😭"
        ]
      },

      {
        user: "Noah",

        mbti: "INTJ",

        avatar:
          "https://i.pravatar.cc/150?img=12",

        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

        text:
          "Le café du campus ☕",

        tag: "☕ Café",

        likes: 11,

        comments: [
          "Incroyable"
        ]
      }
    ]);

  const profile = {
    username: "Yanis",

    mbti: "INTP",

    avatar:
      "https://i.pravatar.cc/150?img=15",
  };

  if (page === "messages") {

    return (

      <>

        <Sidebar
          profile={profile}

          setPage={setPage}
        />

        <Messages />

      </>
    );
  }

  return (

    <>

      <Sidebar
        profile={profile}

        setPage={setPage}
      />

      <main className="feed">

        <div className="stories">

          <div className="story-card">

            <img
              src="https://i.pravatar.cc/150?img=32"
              alt=""
            />

            <span>Lina</span>

          </div>

          <div className="story-card">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt=""
            />

            <span>Noah</span>

          </div>

        </div>

        <div className="topbar">

          <input
            type="text"

            placeholder=
              "Partage une vibe campus..."

            value={message}

            onChange={(e) =>
              setMessage(e.target.value)
            }
          />

          <input
            type="file"

            accept="image/*"

            onChange={(e) => {

              const file =
                e.target.files[0];

              if (file) {

                setSelectedImage(
                  URL.createObjectURL(file)
                );
              }
            }}
          />

          <button
            className="post-btn"

            onClick={() => {

              if (
                message.trim() === ""
              )
                return;

              setPosts([
                {
                  user:
                    profile.username,

                  mbti:
                    profile.mbti,

                  avatar:
                    profile.avatar,

                  image:
                    selectedImage ||

                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",

                  text: message,

                  tag: "✨ Mood",

                  likes: 0,

                  comments: []
                },

                ...posts
              ]);

              setMessage("");

              setSelectedImage(null);
            }}
          >
            Poster
          </button>

        </div>

        <div className="posts">

          {posts.map((post, index) => (

            <PostCard
              key={index}

              post={post}

              posts={posts}

              setPosts={setPosts}

              index={index}

              setSelectedUser={
                setSelectedUser
              }
            />

          ))}

        </div>

      </main>

      <Rightbar />

      <Profile
        user={selectedUser}

        setSelectedUser={
          setSelectedUser
        }
      />

    </>

  );
}

export default Feed;