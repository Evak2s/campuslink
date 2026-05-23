import { useMemo } from "react";

function AIMatch() {

  const profile = JSON.parse(
    localStorage.getItem("kamp-profile")
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
      ] || [
        {
          name: "Alex",
          mbti: "ENTP",
          compatibility: 82
        },
        {
          name: "Maya",
          mbti: "ENFP",
          compatibility: 79
        }
      ]
    );

  }, [profile]);

  return (

    <div className="widget">

      <h2>
        🧠 Campus Match
      </h2>

      <p>

        Profil détecté :

        <strong>
          {" "}
          {profile?.mbti || "Non renseigné"}
        </strong>

      </p>

      <div
        style={{
          marginTop: "15px"
        }}
      >

        {matches.map(
          (match, index) => (

            <div
              key={index}
              style={{
                marginBottom: "12px"
              }}
            >

              <strong>
                {match.name}
              </strong>

              <div>
                {match.mbti}
              </div>

              <div>
                Compatibilité :
                {" "}
                {match.compatibility}
                %
              </div>

            </div>

          )
        )}

      </div>

      <p
        style={{
          marginTop: "15px",
          fontSize: "0.9rem"
        }}
      >

        🤖 Recommandation basée sur
        votre profil MBTI.

      </p>

    </div>

  );
}

export default AIMatch;