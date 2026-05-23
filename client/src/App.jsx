import {
  useEffect,
  useState
} from "react";

import {
  onAuthStateChanged
} from "firebase/auth";

import { auth }
from "./firebase";

import Auth
from "./components/Auth";

import SetupProfile
from "./components/SetupProfile";

import Feed
from "./components/Feed";

import "./App.css";

function App() {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [profile, setProfile] =
    useState(null);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(

        auth,

        (currentUser) => {

          setUser(currentUser);

          setLoading(false);
        }
      );

    return () =>
      unsubscribe();

  }, []);

  useEffect(() => {

    const savedProfile =
      localStorage.getItem(
        "kamp-profile"
      );

    if (savedProfile) {

      setProfile(
        JSON.parse(
          savedProfile
        )
      );
    }

  }, []);

  if (loading) {

    return (

      <div className="loading">

        Chargement...

      </div>
    );
  }

  if (!user) {

    return <Auth />;
  }

  if (!profile) {

    return (

      <SetupProfile
        setProfile={
          setProfile
        }
      />
    );
  }

  return (

    <Feed
      profile={profile}
    />
  );
}

export default App;