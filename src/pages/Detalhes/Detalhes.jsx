import React from "react";
import { useNavigate } from "react-router-dom";
import bebe_dancarina from "../../imgs/bebe_dancarina.gif";
import "./Detalhes.css";

function Detalhes() {
  const navigate = useNavigate();

  function baba() {
    navigate("/baba");
  }

  return (
    <div className="detalhes-container">
      <h1 className="detalhes-title">Caso você desejar contratar uma babá, você deverá seguir os seguintes passos:</h1>
      <div className="dancarina-container">
        <img src={bebe_dancarina} alt="bebe_dancarina" className="dancarina-gif" />
      </div>
      <div className="passo-passo">
        <div className="passo">
          <h2 className="passo-title">Passo 1</h2>
          <p className="passo-description">Faça o download do aplicativo de babás.</p>
        </div>
        <div className="passo">
          <h2 className="passo-title">Passo 2</h2>
          <p className="passo-description">Crie uma conta no aplicativo.</p>
        </div>
        <div className="passo">
          <h2 className="passo-title">Passo 3</h2>
          <p className="passo-description">Procure por babás disponíveis na sua região.</p>
        </div>
        <div className="passo">
          <h2 className="passo-title">Passo 4</h2>
          <p className="passo-description">Agende um horário com a babá de sua escolha.</p>
        </div>
      </div>
      <button className="detalhes-button voltar-button" onClick={baba}>Voltar</button>
    </div>
  );
}

export default Detalhes;