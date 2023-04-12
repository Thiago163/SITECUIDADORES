import React from "react";
import { useNavigate } from "react-router-dom";
import imgHome from '../../imgs/cuidadores.png';
import logo from '../../imgs/cuidadoresLogo.png';
import bebe from '../../imgs/bebe.jpg';
import brinquedo from '../../imgs/brinquedo.jpg';
import babas from '../../imgs/babas.jpg';
import "./Home.css";

function Home() {
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
          <h1>Sejam bem vindos</h1>
        </div>

        <div className="imgBox">
          <img src={logo} alt="logo" />
          <img src={imgHome} alt="imagem de cuidadores" />
        </div>


        <div className="titleGeneral">
          <h1>Quem Somos?</h1>
        </div>
        <div className="rectangles">
          <div className="rectangle1">
            <div className="imgrectangle">
              <img src={bebe} alt="bebe" />
            </div>
            <p>Somos uma plataforma dedicada a conectar famílias em busca de serviços de babá. Nosso aplicativo 
              é a solução perfeita para quem busca comodidade e praticidade na hora de encontrar a pessoa ideal para cuidar de seus filhos.</p>
          </div>
          <div className="rectangle2">
            <div className="imgrectangle">
              <img src={brinquedo} alt="brinquedo" />
            </div>
            <p>Oferecemos uma ampla seleção de perfis de babás em São Paulo, 
              que buscam sempre trazer o melhor trabalho, para garantir a segurança e tranquilidade de nossos clientes.</p>
          </div>
          <div className="rectangle3">
            <div className="imgrectangle">
              <img src={babas} alt="babas" />
            </div>
            <p>Conte com nossa plataforma para encontrar a babá ideal para sua família, com toda a praticidade e segurança que você merece!</p>
          </div>
        </div>

        <div className="titleGeneral">
          <h1>Explorem nosso APP</h1>
        </div>
        <div className="containerAPP">
        <button onClick={aplicativo} className="appButton">Aplicativo</button>
        </div>
      </section>
    </div>
  );
}

export default Home;