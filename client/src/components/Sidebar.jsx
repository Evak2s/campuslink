import {
  signOut
} from "firebase/auth";

import {
  auth
} from "../firebase";

function Sidebar({
  profile,
  setPage
}) {

  async function logout() {

    await signOut(auth);

    localStorage.removeItem(
      "kamp-profile"
    );

    window.location.reload();
  }

  function renderAvatar() {

    if (
      profile.photo
    ) {

      return (

        <img
          className="sidebar-avatar"
          src={profile.photo}
          alt=""
        />
      );
    }

    return (

      <div className="sidebar-letter">

        {
          profile.username
            ?.charAt(0)
            .toUpperCase()
        }

      </div>
    );
  }

  return (

    <aside className="sidebar">

      <h1>
        KAMP
      </h1>

      <button
        onClick={() =>
          setPage("feed")
        }
      >
        🏠 Feed
      </button>

      <button
        onClick={() =>
          setPage("messages")
        }
      >
        💬 Messages
      </button>

      <button>
        🔔 Notifications
      </button>

      <button
        onClick={() =>
          setPage("aimatch")
        }
      >
        🧠 IA Match
      </button>

      <div className="sidebar-profile">

        {renderAvatar()}

        <h3>
          {profile.username}
        </h3>

        <p>

          {profile.mbti}

          {" • "}

          {profile.degree}

        </p>

      </div>

      <button
        className="logout-btn"
        onClick={logout}
      >

        Déconnexion

      </button>

    </aside>
  );
}

export default Sidebar;