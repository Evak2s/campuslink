import {
  useEffect,
  useState
} from "react";

import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";

import {
  auth,
  db
} from "../firebase";

function Messages({
  profile
}) {

  const [text, setText] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [currentRoom,
    setCurrentRoom] =
    useState("general");

  const rooms = [

    {
      id: "general",
      name: "💬 Général"
    },

    {
      id: "revision",
      name: "📚 Révisions"
    },

    {
      id: "gaming",
      name: "🎮 Gaming"
    },

    {
      id: "night",
      name: "🌙 Vocal nuit"
    }
  ];

  useEffect(() => {

    const q = query(

      collection(
        db,
        "rooms",
        currentRoom,
        "messages"
      ),

      orderBy(
        "createdAt",
        "asc"
      )
    );

    const unsubscribe =
      onSnapshot(

        q,

        (snapshot) => {

          const loaded =
            snapshot.docs.map(
              (doc) => ({
                id: doc.id,
                ...doc.data()
              })
            );

          setMessages(
            loaded
          );
        }
      );

    return () =>
      unsubscribe();

  }, [currentRoom]);

  async function sendMessage() {

    if (
      !text.trim()
    ) return;

    try {

      await addDoc(

        collection(
          db,
          "rooms",
          currentRoom,
          "messages"
        ),

        {

          uid:
            auth.currentUser.uid,

          sender:
            profile.username,

          text,

          createdAt:
            serverTimestamp()
        }
      );

      setText("");

    } catch (error) {

      console.log(error);

      alert(
        error.message
      );
    }
  }

  return (

    <div className="messages-page">

      <div className="chat-sidebar">

        <h2>
          Salons
        </h2>

        {rooms.map((room) => (

          <div

            key={room.id}

            className={

              currentRoom === room.id

              ? "chat-room active"

              : "chat-room"
            }

            onClick={() =>
              setCurrentRoom(
                room.id
              )
            }
          >

            {room.name}

          </div>

        ))}

      </div>

      <div className="chat-box">

        <div className="chat-header">

          {
            rooms.find(
              (r) =>
                r.id === currentRoom
            )?.name
          }

        </div>

        <div className="chat-messages">

          {messages.map((msg) => (

            <div

              key={msg.id}

              className={

                msg.sender ===
                profile.username

                ? "my-message"

                : "their-message"
              }
            >

              <strong>
                {msg.sender}
              </strong>

              <p>
                {msg.text}
              </p>

            </div>

          ))}

        </div>

        <div className="chat-input">

          <input
            type="text"

            placeholder=
              "Envoyer un message..."

            value={text}

            onChange={(e) =>
              setText(
                e.target.value
              )
            }
          />

          <button
            onClick={
              sendMessage
            }
          >

            ➤

          </button>

        </div>

      </div>

    </div>
  );
}

export default Messages;