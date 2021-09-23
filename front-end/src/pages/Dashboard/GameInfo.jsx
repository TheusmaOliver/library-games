/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Loading from "../../components/Loading";
import { api } from "../../services/api";
import "../../styles/gameInfo.css";
import { AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export default function GameInfo() {
  const { id } = useParams();
  const profile = JSON.parse(localStorage.getItem("profile"));
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  console.log(profile);
  const loadData = useCallback(async () => {
    setLoading(true);
    await api
      .buildApiGetRequest(api.readGamesById(id), true)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((response) => {
        setInfo(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [id]);
  useEffect(() => loadData(), [loadData]);

  const handleFavorite = async () => {
    if (profile) {
      const id = profile.id;
      const payload = {
        gamesIds: [info.id],
      };
      console.log(payload);
      await api
        .buildApiPatchRequest(api.readProfileById(id), payload)
        .then((response) => {
          console.log(response);
          if (response.status !== 200) {
            throw new Error(response.status);
          }
          setActive(!active);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Você precisa estar logado");
    }
  };
  return (
    <div className="gameInfo">
      {loading && <Loading />}
      {info && (
        <>
          <span
            className={`gameInfo__favorite ${active ? "active" : ""}`}
            onClick={handleFavorite}
          >
            {active ? <MdFavorite /> : <MdFavoriteBorder />}
          </span>
          <div className="gameInfo__midia">
            <img src={info.cover} alt={info.title} />
            <iframe
              src={`https://www.youtube.com/embed/${info.trailer}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="gameInfo__info">
            <ul className="gameInfo__info--list">
              {info.genrers?.map((genrer) => (
                <li className="gameInfo__info--list-item" key={genrer.id}>
                  {genrer.name}
                </li>
              ))}
            </ul>
            <span className="gameInfo__info--score">
              <AiFillStar />
              {info.score}/10
            </span>
            <p className="gameInfo__info--description">{info.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
