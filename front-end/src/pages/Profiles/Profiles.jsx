import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import "../../styles/profiles.css";

export default function Profiles({ auth }) {
  console.log("Profiles");
  const [user, setUser] = useState([]);
  console.log(user);
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
        setUser(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(auth);
  useEffect(() => {
    loadUser();
  }, []);
  return <div id="profiles">profiles</div>;
}
