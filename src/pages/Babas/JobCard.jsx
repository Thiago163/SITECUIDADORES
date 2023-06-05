import "./JobCard.css";

function JobCard({ vaga }) {
    const handleClick = () => {
        window.location.href = vaga.link;
    };

    return (
        <div className="card">
            <div className="company-logo">
                <img src={vaga.imagem}> alt="Foto não cadastrada"</img>
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
                    {vaga.estado}, {vaga.cidade}
                    </h2>
                    <button className="portiButton" onClick={handleClick}>
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
