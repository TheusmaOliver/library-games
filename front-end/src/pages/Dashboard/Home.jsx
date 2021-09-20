import React, { useCallback, useEffect, useState } from "react";
import GamesList from "../../components/GamesList";
import Loading from "../../components/Loading";
import { api } from "../../services/api";

export default function Home() {
  const [games, setGames] = useState([]);
  const [erro, setErro] = useState(null);
  const [genrers, setGenrers] = useState([]);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genrerName, setGenrerName] = useState("");

  const loadData = useCallback(async () => {
    if (filter) {
      setLoading(true);
      await api
        .buildApiGetRequest(api.readGenrersById(filter))
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((response) => {
          setGames(response.games);
          setGenrerName(response.name);
        })
        .catch((err) => {
          setErro(err);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
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
        .catch((err) => {
          setErro(err);
        })
        .finally(() => setLoading(false));
    }
  }, [filter]);

  const loadGenrer = async () => {
    setLoading(true);
    await api
      .buildApiGetRequest(api.readAllGenrers())
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((response) => {
        setGenrers(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
    loadGenrer();
  }, [loadData]);

  if (erro) {
    return <div>error</div>;
  }
  return (
    <div>
      {loading && <Loading />}
      <GamesList
        games={games}
        genrers={genrers}
        setFilter={setFilter}
        genrerName={genrerName}
        setGenrerName={setGenrerName}
        filter={filter}
      />
    </div>
  );
}
