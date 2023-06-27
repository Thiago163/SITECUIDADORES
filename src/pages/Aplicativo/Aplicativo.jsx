import React from "react";
import { useNavigate } from "react-router-dom";
import "./Aplicativo.css";

function Aplicativo() {
  const navigate = useNavigate();

  function home() {
    navigate("/");
  }

  function aplicativo() {
    navigate("/aplicativo");
  }

  function baba() {
    navigate("/baba");
  }

  function cliente() {
    navigate("/clientes");
  }

  function openGithub() {
    window.open("https://github.com/Thiago163/site_cuidadores", "_blank");
  }

  function openPlaystore() {
    window.open("https://play.google.com/store/", "_blank");
  }

  return (
    <div className="main">
      <header>
        <nav>
          <ul>
            <li onClick={home}>início</li>
            <li onClick={aplicativo}>Aplicativo</li>
            <li onClick={baba}>Babás</li>
            <li onClick={cliente}>Clientes</li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <div className="titleBox">
          <h1>Experimentem nosso aplicativo</h1>
        </div>

        <div className="container">
          <button onClick={openGithub} className="appButtonGIT">Github</button>
          <button onClick={openPlaystore} className="appButtonAPP">GooglePlay</button>
          <button onClick={home} className="appButtonVoltar">Home</button>
        </div>

      </section>
    </div>
  );
}

export default Aplicativo;
