import { useMemo } from "react";

function AIMatchPage() {

  const profile = JSON.parse(
    localStorage.getItem(
      "kamp-profile"
    )
  );

  const matches = useMemo(() => {

    const mbtiMatches = {

      INTJ: [
        {
          name: "Emma",
          mbti: "ENFP",
          compatibility: 92
        },
        {
          name: "Lucas",
          mbti: "ENTP",
          compatibility: 88
        }
      ],

      INFJ: [
        {
          name: "Sarah",
          mbti: "ENTP",
          compatibility: 91
        },
        {
          name: "Lina",
          mbti: "ENFP",
          compatibility: 86
        }
      ],

      ENFP: [
        {
          name: "Thomas",
          mbti: "INTJ",
          compatibility: 93
        },
        {
          name: "Clara",
          mbti: "INFJ",
          compatibility: 87
        }
      ],

      ENTP: [
        {
          name: "Julie",
          mbti: "INFJ",
          compatibility: 90
        },
        {
          name: "Nathan",
          mbti: "INTJ",
          compatibility: 85
        }
      ]
    };

    return (
      mbtiMatches[
        profile?.mbti?.toUpperCase()
      ] || []
    );

  }, [profile]);

  return (

    <div
      style={{
        padding: "30px",
        width: "100%"
      }}
    >

      <h1>
        🧠 Campus Match IA
      </h1>

      <p>

        Analyse basée sur votre profil :

        {" "}

        <strong>
          {profile?.mbti}
        </strong>

      </p>

      <div
        style={{
          marginTop: "30px"
        }}
      >

        {matches.map(
          (match, index) => (

            <div
              key={index}
              className="card"
              style={{
                marginBottom: "20px",
                padding: "20px"
              }}
            >

              <h3>
                {match.name}
              </h3>

              <p>
                MBTI :
                {" "}
                {match.mbti}
              </p>

              <p>
                Compatibilité :
                {" "}
                {match.compatibility}
                %
              </p>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default AIMatchPage;