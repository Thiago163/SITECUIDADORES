import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobCard.css';

function JobCard({ vaga }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aplicativo');
  };

  const handlePortfolioClick = (event) => {
    event.stopPropagation(); // Impede que o evento de clique no card seja acionado

    window.location.href = vaga.link;
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="company-logo">
        <img src={vaga.imagem} alt="Imagem não cadastrada" />
      </div>
      <div className="text-area">
        <div className="title-area">
          <h1>Nome: {vaga.nome}</h1>
          <h2>Preço cobrado: R${vaga.preco} por dia</h2>
        </div>
        <div className="content-area">
          <h2>Descrição do cuidador:</h2>
          <p>{vaga.descricao}</p>
          <h2>
            {vaga.cidade} {vaga.estado}
          </h2>
          <button className="portiButton" onClick={handlePortfolioClick}>
            Portfólio
          </button>
        </div>
        <div className="footer">
          <p>Celular: {vaga.celular} | Email: {vaga.email}</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
