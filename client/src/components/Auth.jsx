import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

function Auth() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [isLogin, setIsLogin] =
    useState(true);

  async function handleAuth() {

    try {

      if (isLogin) {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      } else {

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

    } catch (error) {

      alert(error.message);
    }
  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>KAMP</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleAuth}>

          {isLogin
            ? "Connexion"
            : "Inscription"}

        </button>

        <p
          onClick={() =>
            setIsLogin(!isLogin)
          }
        >

          {isLogin
            ? "Créer un compte"
            : "Déjà un compte ?"}

        </p>

      </div>

    </div>
  );
}

export default Auth;