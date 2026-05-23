import {
  useState
} from "react";

function SetupProfile({
  setProfile
}) {

  const [username, setUsername] =
    useState("");

  const [mbti, setMbti] =
    useState("");

  const [degree, setDegree] =
    useState("");

  const [photo, setPhoto] =
    useState("");

  function handlePhoto(e) {

    const file =
      e.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onloadend =
      () => {

        setPhoto(
          reader.result
        );
      };

    reader.readAsDataURL(file);
  }

  function saveProfile() {

    const profile = {

      username,

      mbti,

      degree,

      photo
    };

    localStorage.setItem(
      "kamp-profile",
      JSON.stringify(profile)
    );

    setProfile(profile);
  }

  function renderPreview() {

    if (photo) {

      return (

        <img
          src={photo}
          alt=""
          className="preview-avatar"
        />
      );
    }

    return (

      <div className="preview-letter">

        {
          username
            ? username
                .charAt(0)
                .toUpperCase()
            : "K"
        }

      </div>
    );
  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          KAMP
        </h1>

        {renderPreview()}

        <input
          type="text"

          placeholder="Prénom"

          value={username}

          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
        />

        <input
          type="text"

          placeholder="MBTI"

          value={mbti}

          onChange={(e) =>
            setMbti(
              e.target.value
            )
          }
        />

        <input
          type="text"

          placeholder="Licence"

          value={degree}

          onChange={(e) =>
            setDegree(
              e.target.value
            )
          }
        />

        <input
          type="file"

          accept="image/*"

          onChange={handlePhoto}
        />

        <button
          onClick={saveProfile}
        >

          Continuer

        </button>

      </div>

    </div>
  );
}
export default SetupProfile;