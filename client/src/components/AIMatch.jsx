import AIMatch from "./AIMatch";

function Rightbar() {

  return (

    <aside className="rightbar">

      <div className="widget">

        <h2>
          🔥 Tendances campus
        </h2>

        <p>
          #Partiels
        </p>

        <p>
          #BU
        </p>

        <p>
          #Alternance
        </p>

      </div>

      <AIMatch />

    </aside>
  );
}

export default Rightbar;