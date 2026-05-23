import {
  useEffect,
  useState
}
from "react";

import {
  collection,
  onSnapshot,
  query,
  orderBy
}
from "firebase/firestore";

import { db }
from "../firebase";

function Notifications() {

  const [
    notifications,
    setNotifications
  ] = useState([]);

  useEffect(() => {

    const q = query(

      collection(
        db,
        "notifications"
      ),

      orderBy(
        "createdAt",
        "desc"
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

          setNotifications(
            loaded
          );
        }
      );

    return () =>
      unsubscribe();

  }, []);

  return (

    <div className="notifications">

      <h3>
        Notifications
      </h3>

      {notifications.map(
        (notif) => (

          <div
            key={notif.id}

            className="notif-card"
          >

            {notif.text}

          </div>
        )
      )}

    </div>
  );
}

export default Notifications;