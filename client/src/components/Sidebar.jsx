function Sidebar({
  profile,
  setPage
}) {

  return (

    <aside className="sidebar">

      <h1>KAMP</h1>

      <button
        onClick={() =>
          setPage("feed")
        }
      >
        🏠
      </button>

      <button
        onClick={() =>
          setPage("messages")
        }
      >
        💬
      </button>

      <button>
        🔖
      </button>

      <button>
        🎉
      </button>

      <button>
        👤
      </button>

      <div className="my-profile">

        <img
          src={profile.avatar}
          alt=""
        />

        <strong>
          {profile.username}
        </strong>

        <span>
          {profile.mbti}
        </span>

      </div>

    </aside>
  );
}

export default Sidebar;