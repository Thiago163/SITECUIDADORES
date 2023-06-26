import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./JobCard.css";
import JobCard from "./JobCard";

function Jobs() {
  const [loading, setLoading] = useState(true);
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    fetch("https://cuidadores.azurewebsites.net/api/site", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setVagas(json);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("alert");
        errorDiv.textContent = "Erro ao buscar babás⚠️";
        document.body.appendChild(errorDiv);
        setTimeout(() => {
          document.body.removeChild(errorDiv);
        }, 999999999);
      });
  }, []);

  return (
    <div className="jobs-area">
      {loading ? (
        <div className="loading">
          <div className="loading-circle"></div>
          <div className="loading-text">Carregando...</div>
        </div>
      ) : (
        vagas.map((vaga, index) => <JobCard vaga={vaga} key={index} />)
      )}
    </div>
  );
}

function Babas() {
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

  return (
    <div className="main">
      <header>
        <nav>
          <ul>
            <li onClick={home}>Home</li>
            <li onClick={aplicativo}>Aplicativo</li>
            <li onClick={baba}>Babás</li>
            <li onClick={cliente}>Clientes</li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <div className="titleBox">
          <h1>Babás</h1>
        </div>
        <div>
          <Jobs />
        </div>
      </section>
    </div>
  );
}

export default Babas;
