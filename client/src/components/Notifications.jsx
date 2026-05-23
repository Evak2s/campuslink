import {
  useEffect,
  useState
} from "react";

import {
  collection,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

import { db } from "../firebase";

function Notifications() {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    const q = query(
      collection(db, "notifications"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe =
      onSnapshot(q, (snapshot) => {

        const data =
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

        setNotifications(data);
      });

    return () => unsubscribe();

  }, []);

  function handleClick(notif) {

    // simple version : on log pour tester
    console.log("Notification cliquée :", notif);

    // futur upgrade :
    // ouvrir post ou profil
    // window.location.hash = ...
  }

  return (

    <div className="notifications">

      <h2>🔔 Notifications</h2>

      {notifications.length === 0 ? (
        <p>Aucune notification</p>
      ) : (

        notifications.map((n) => (

          <div
            key={n.id}
            onClick={() => handleClick(n)}
            style={{
              padding: "10px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
              backgroundColor: "#fafafa"
            }}
          >

            <strong>{n.from}</strong>
            <p>{n.text}</p>

          </div>

        ))

      )}

    </div>

  );
}

export default Notifications;