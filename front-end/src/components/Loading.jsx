import React from "react";
import loadingImg from "../assets/images/loading.gif";
import "../styles/loading.css";

export default function Loading() {
  return <img className="loading" src={loadingImg} alt="loading" />;
}
