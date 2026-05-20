import { useState } from "react";

function Messages() {

  const [text, setText]
    = useState("");

  const [messages, setMessages]
    = useState([
      {
        sender: "Lina",
        text: "T’es à la BU ?"
      },

      {
        sender: "Moi",
        text: "Oui 😭"
      }
    ]);

  return (

    <div className="messages-page">

      <div className="chat-sidebar">

        <h2>
          Messages
        </h2>

        <div className="chat-user active">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt=""
          />

          <span>Lina</span>

        </div>

        <div className="chat-user">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
          />

          <span>Noah</span>

        </div>

      </div>

      <div className="chat-box">

        <div className="chat-header">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt=""
          />

          <div>

            <strong>
              Lina
            </strong>

            <p>
              En ligne
            </p>

          </div>

        </div>

        <div className="chat-messages">

          {messages.map(
            (msg, i) => (

              <div

                key={i}

                className={
                  msg.sender === "Moi"
                    ? "my-message"
                    : "their-message"
                }
              >
                {msg.text}
              </div>

            )
          )}

        </div>

        <div className="chat-input">

          <input
            type="text"

            placeholder=
              "Envoyer un message..."

            value={text}

            onChange={(e) =>
              setText(e.target.value)
            }
          />

          <button

            onClick={() => {

              if (
                text.trim() === ""
              )
                return;

              setMessages([
                ...messages,

                {
                  sender: "Moi",

                  text
                }
              ]);

              setText("");
            }}
          >
            ➤
          </button>

        </div>

      </div>

    </div>
  );
}

export default Messages;