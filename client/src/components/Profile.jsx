function Profile({
  user,
  setSelectedUser
}) {

  if (!user) return null;

  return (

    <div className="profile-overlay">

      <div className="profile-card">

        <button
          className="close-btn"

          onClick={() =>
            setSelectedUser(null)
          }
        >
          ✕
        </button>

        <img
          className="profile-avatar"

          src={user.avatar}

          alt=""
        />

        <h2>
          {user.user}
        </h2>

        <p>
          {user.mbti}
        </p>

        <div className="profile-bio">

          ✨ Étudiant campus vibes,
          café addict et nocturne

        </div>

        <div className="profile-stats">

          <div>

            <strong>12</strong>

            <span>Posts</span>

          </div>

          <div>

            <strong>84%</strong>

            <span>
              Compatibilité
            </span>

          </div>

          <div>

            <strong>43</strong>

            <span>Amis</span>

          </div>

        </div>

        <div className="profile-gallery">

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            alt=""
          />

        </div>

      </div>

    </div>
  );
}

export default Profile;