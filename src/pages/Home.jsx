import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/home.css";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <header>Hello</header>
      </div>
    </div>
  );
}
