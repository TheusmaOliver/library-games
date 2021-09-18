import React, { useEffect, useState } from "react";
import GamesList from "../../components/GamesList";
import { api } from "../../services/api";

export default function Home() {
  const [games, setGames] = useState([]);
  const [erro, setErro] = useState(null);

  const loadData = async () => {
    await api
      .buildApiGetRequest(api.readAllGames())
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((response) => {
        setGames(response);
      })
      .catch(() => {
        setErro("Unauthorized");
      });
  };

  useEffect(() => {
    loadData();
  }, [erro]);

  if (erro) {
    return <div>error</div>;
  }
  return (
    <div>
      <GamesList games={games} error={erro} />
    </div>
  );
}
