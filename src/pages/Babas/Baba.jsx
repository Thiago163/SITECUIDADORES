import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./JobCard.css";
import JobCard from "./JobCard";

function Jobs() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44396/api/cuidadores", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setVagas(json);
      })
      .catch((error) => {
        console.log(error);
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("alert");
        errorDiv.textContent = "Erro ao buscar babás⚠️";
        document.body.appendChild(errorDiv);
        setTimeout(() => {
          document.body.removeChild(errorDiv);
        }, 4000);
      });
  }, []);

  return (
    <div className="jobs-area">
      {vagas.map((vaga, index) => (
        <JobCard vaga={vaga} key={index} />
      ))}
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