import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import "../../styles/profiles.css";
import User from "../../hooks/User";
import { api } from "../../services/api";

export default function Profiles(props) {
  const { user } = User();

  const saveProfile = async (id) => {
    await api
      .buildApiGetRequest(api.readProfileById(id), true)
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("profile", JSON.stringify(response));
        props.history.push("/");
      });
  };
  return (
    <div id="profiles">
      {user.profiles &&
        user.profiles.length > 0 &&
        user.profiles.map((profile) => (
          <div className="profiles__info" key={profile.id}>
            <h1 className="profiles__info--title">Profiles</h1>
            <div className="profiles__info--box">
              <img
                onClick={() => saveProfile(profile.id)}
                src={profile.imagemUrl}
                alt="imagem de perfil"
              />
              <div className="profiles__info--box-actions">
                <button id="edit">
                  <MdModeEdit />
                </button>
                <button id="delete">
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}

      <button>Create Profile</button>
    </div>
  );
}
