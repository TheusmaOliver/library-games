import React from "react";

export default function MyAccount(props) {
  const disconnectUser = () => {
    localStorage.clear();
    props.history.push("/");
  };
  return <button onClick={disconnectUser}>Log out</button>;
}
