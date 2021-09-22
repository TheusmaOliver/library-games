import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function User() {
  const [user, setUser] = useState([]);
  const auth = Boolean(localStorage.getItem("JWT"));

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
  useEffect(() => {
    if (auth) {
      loadUser();
    }
  }, [auth]);
  return {
    user,
  };
}
