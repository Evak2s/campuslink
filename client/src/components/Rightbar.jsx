import AIMatch from "./AIMatch";

function Rightbar() {

  return (

    <aside className="rightbar">

      <div className="card">

        <h3>
          ✨ Vibes compatibles
        </h3>

        <p>
          Camille — ENFP
        </p>

        <span>
          3 amis en commun
        </span>

      </div>

      <div className="card">

        <h3>
          🔥 Campus live
        </h3>

        <p>
          12 personnes à la BU
        </p>

        <p>
          4 salons actifs
        </p>

      </div>

      <AIMatch />

    </aside>

  );
}

export default Rightbar;