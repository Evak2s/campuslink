import { useMemo } from "react";

function AIMatchPage() {

  const profile = JSON.parse(
    localStorage.getItem(
      "kamp-profile"
    )
  );

  const matches = useMemo(() => {

    const mbtiMatches = {

      INTP: [
        {
          name: "Camille",
          mbti: "ENFJ",
          compatibility: 95
        },
        {
          name: "Lucas",
          mbti: "ENTJ",
          compatibility: 90
        }
      ],

      INTJ: [
        {
          name: "Emma",
          mbti: "ENFP",
          compatibility: 92
        },
        {
          name: "Nathan",
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

      INFP: [
        {
          name: "Noah",
          mbti: "ENFJ",
          compatibility: 94
        },
        {
          name: "Chloé",
          mbti: "ENTJ",
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

      ENFJ: [
        {
          name: "Eva",
          mbti: "INFP",
          compatibility: 94
        },
        {
          name: "Yanis",
          mbti: "INTP",
          compatibility: 90
        }
      ],

      ENTJ: [
        {
          name: "Sofia",
          mbti: "INTP",
          compatibility: 93
        },
        {
          name: "Adam",
          mbti: "INFP",
          compatibility: 86
        }
      ],

      ISTJ: [
        {
          name: "Maya",
          mbti: "ESFP",
          compatibility: 91
        },
        {
          name: "Tom",
          mbti: "ESTP",
          compatibility: 85
        }
      ],

      ISFJ: [
        {
          name: "Léo",
          mbti: "ESFP",
          compatibility: 90
        },
        {
          name: "Anna",
          mbti: "ESTP",
          compatibility: 84
        }
      ],

      ESTJ: [
        {
          name: "Clémence",
          mbti: "ISFP",
          compatibility: 89
        },
        {
          name: "Hugo",
          mbti: "ISTP",
          compatibility: 84
        }
      ],

      ESFJ: [
        {
          name: "Inès",
          mbti: "ISFP",
          compatibility: 91
        },
        {
          name: "Maxime",
          mbti: "ISTP",
          compatibility: 83
        }
      ],

      ISTP: [
        {
          name: "Laura",
          mbti: "ESFJ",
          compatibility: 88
        },
        {
          name: "Jules",
          mbti: "ENFJ",
          compatibility: 81
        }
      ],

      ISFP: [
        {
          name: "Nina",
          mbti: "ESFJ",
          compatibility: 90
        },
        {
          name: "Alex",
          mbti: "ENTJ",
          compatibility: 82
        }
      ],

      ESTP: [
        {
          name: "Zoé",
          mbti: "ISFJ",
          compatibility: 88
        },
        {
          name: "Louis",
          mbti: "INFJ",
          compatibility: 80
        }
      ],

      ESFP: [
        {
          name: "Marie",
          mbti: "ISTJ",
          compatibility: 92
        },
        {
          name: "Paul",
          mbti: "INTJ",
          compatibility: 78
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
          compatibility: 80
        }
      ]
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

              <h2>
                {match.name}
              </h2>

              <p>
                MBTI : {match.mbti}
              </p>

              <p>
                Compatibilité : {match.compatibility}%
              </p>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default AIMatchPage;