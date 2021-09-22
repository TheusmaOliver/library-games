/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Loading from "../../components/Loading";
import { api } from "../../services/api";
import "../../styles/gameInfo.css";
import { AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useParams } from "react-router";

export default function GameInfo() {
  const { id } = useParams();
  const auth = Boolean(localStorage.getItem("JWT"));
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [user, setUser] = useState([]);
  console.log(auth);
  const loadUser = async () => {
    await api
      .buildApiGetRequest(api.readCurrentUser(), true)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((response) => response.user)
      .then((response) => {
        setUser(response.profiles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (auth) {
      loadUser();
    }
  }, [auth]);

  const loadData = useCallback(async () => {
    setLoading(true);
    await api
      .buildApiGetRequest(api.readGamesById(id))
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
  return (
    <div className="gameInfo">
      {loading && <Loading />}
      {info && (
        <>
          <span
            className={`gameInfo__favorite ${active ? "active" : ""}`}
            onClick={() => setActive(!active)}
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
