import "./JobCard.css";

function JobCard({ vaga }) {
    return (
            <div className='card'>
                <div className="company-logo">
                    <img src={vaga.imagem}></img>
                </div>
                <div className="text-area">
                    <div className="title-area">
                        <h1>Nome: {vaga.nome}</h1>
                        <h2>Preço cobrado: R${vaga.preco} por dia</h2>
                    </div>
                    <div className="content-area">
                        <p><h2>Descrição do cuidador:</h2> {vaga.descricao}</p>
                        <button onClick={() => window.location.href = vaga.link} className="portiButton">Portifólio</button>
                    </div>
                    <div className="footer">
                        <p>Celular: {vaga.celular}</p>
                        <p>Email: {vaga.email}</p>
                    </div>
                </div>
            </div>
    )
}

export default JobCard