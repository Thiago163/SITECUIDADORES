import React from "react";
import "./JobCard.css";

function JobCard({ vaga }) {
  const handlePortfolioClick = () => {
    window.location.href = vaga.link;
  };

  return (
    <div className="card">
      <div className="company-logo">
        <img src={vaga.imagem} alt="Foto não cadastrada" />
      </div>
      <div className="text-area">
        <div className="title-area">
          <h1>Nome: {vaga.nome}</h1>
          <h2>Preço cobrado: R${vaga.preco} por dia</h2>
        </div>
        <div className="content-area">
          <h2>Descrição do cuidador:</h2>
          <p>{vaga.descricao}</p>
          <p>
            {vaga.estado}, {vaga.cidade}
          </p>
          <button className="portfolioButton" onClick={handlePortfolioClick}>
            Portfólio
          </button>
        </div>
        <div className="footer">
          <p>
            Celular: {vaga.celular} | Email: {vaga.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
