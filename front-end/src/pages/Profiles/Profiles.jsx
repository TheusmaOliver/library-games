import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import "../../styles/profiles.css";

export default function Profiles({ auth }) {
  const [user, setUser] = useState([]);

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
  console.log(auth);
  useEffect(() => {
    if (auth) {
      loadUser();
    }
  }, [auth]);
  return <div id="profiles">profiles</div>;
}
