import {
  useEffect,
  useState
} from "react";

import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";

import {
  auth,
  db
} from "../firebase";

import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import PostCard from "./PostCard";
import Messages from "./Messages";
import Profile from "./Profile";

function Feed({ profile }) {

  const [posts, setPosts] =
    useState([]);

  const [message, setMessage] =
    useState("");

  const [selectedImage,
    setSelectedImage] =
    useState("");

  const [page, setPage] =
    useState("feed");

  const [selectedUser,
    setSelectedUser] =
    useState(null);

  useEffect(() => {

    const unsubscribe =
      onSnapshot(

        collection(
          db,
          "posts"
        ),

        (snapshot) => {

          const loadedPosts =
            snapshot.docs.map(
              (doc) => ({
                id: doc.id,
                ...doc.data()
              })
            );

          setPosts(
            loadedPosts.reverse()
          );
        }
      );

    return () =>
      unsubscribe();

  }, []);

  function compressImage(file) {

    return new Promise(
      (resolve) => {

        const reader =
          new FileReader();

        reader.readAsDataURL(file);

        reader.onload =
          (event) => {

            const img =
              new Image();

            img.src =
              event.target.result;

            img.onload =
              () => {

                const canvas =
                  document.createElement(
                    "canvas"
                  );

                const maxWidth =
                  500;

                const scale =
                  maxWidth /
                  img.width;

                canvas.width =
                  maxWidth;

                canvas.height =
                  img.height *
                  scale;

                const ctx =
                  canvas.getContext(
                    "2d"
                  );

                ctx.drawImage(
                  img,
                  0,
                  0,
                  canvas.width,
                  canvas.height
                );

                resolve(
                  canvas.toDataURL(
                    "image/jpeg",
                    0.5
                  )
                );
              };
          };
      }
    );
  }

  async function handleImage(e) {

    const file =
      e.target.files[0];

    if (!file) return;

    const compressed =
      await compressImage(
        file
      );

    setSelectedImage(
      compressed
    );
  }

  async function createPost() {

    try {

      if (
        !message.trim()
      ) return;

      await addDoc(

        collection(
          db,
          "posts"
        ),

        {

          uid:
            auth.currentUser?.uid || "",

          user:
            profile?.username || "",

          mbti:
            profile?.mbti || "",

          degree:
            profile?.degree || "",

          photo:
            profile?.photo || "",

          text:
            message,

          image:
            selectedImage || "",

          tag:
            "✨ Mood",

          likes: 0,

          comments: [],

          createdAt:
            serverTimestamp()
        }
      );

      setMessage("");
      setSelectedImage("");

    } catch (error) {

      console.log(error);

      alert(
        error.message
      );
    }
  }

  if (selectedUser) {

    return (

      <div className="app">

        <Sidebar
          profile={profile}
          setPage={setPage}
        />

        <Profile
          user={selectedUser}
          setSelectedUser={setSelectedUser}
        />

      </div>

    );
  }

  if (
    page === "messages"
  ) {

    return (

      <div className="app">

        <Sidebar
          profile={profile}
          setPage={setPage}
        />

        <Messages
          profile={profile}
        />

      </div>

    );
  }

  return (

    <div className="app">

      <Sidebar
        profile={profile}
        setPage={setPage}
      />

      <main className="feed">

        <div className="topbar">

          <input
            type="text"
            placeholder="Partage une vibe campus..."
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          <button
            className="post-btn"
            onClick={createPost}
          >
            Poster
          </button>

        </div>

        <div className="posts">

          {posts.map(
            (post) => (

              <PostCard
                key={post.id}
                post={post}
                profile={profile}
                setSelectedUser={
                  setSelectedUser
                }
              />

            )
          )}

        </div>

      </main>

      <Rightbar />

    </div>
  );
}

export default Feed;