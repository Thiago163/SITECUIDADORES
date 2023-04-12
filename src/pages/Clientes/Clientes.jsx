import React from "react";
import { useNavigate } from "react-router-dom";
import playstore from '../../imgs/play-store.jpg';
import tcc from '../../imgs/tcc.png';
import mae from '../../imgs/mae.jpg';
import pai from '../../imgs/pai.jpeg';
import avos from '../../imgs/avos.jpg';
import tias from '../../imgs/tias.jpg';

function Clientes() {
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
          <h1>Clientes</h1>
        </div>

        <div className="rectangles">
          <div className="rectangle1">
            <div className="imgrectangle">
              <img src={mae} alt="mae" />
            </div>
            <h1>Mães</h1><br />
            <p>Com nosso aplicativo, mães podem encontrar cuidadores de confiança para seus filhos. 
              Cadastre-se e encontre profissionais qualificados para ajudá-la no cuidado com seus filhos.</p>
          </div>
          <div className="rectangle2">
            <div className="imgrectangle">
              <img src={pai} alt="pai" />
            </div>
            <h1>Pais</h1><br />
            <p>Pais, encontre cuidadores qualificados para seus filhos, seguro e prático. 
              Cadastre-se agora para encontrar profissionais confiáveis para cuidar do que é mais importante para você.</p>
          </div>
          <div className="rectangle3">
            <div className="imgrectangle">
              <img src={avos} alt="avos" />
            </div>
            <h1>Avós</h1><br />
            <p>Com nosso aplicativo, avós podem encontrar cuidadores para seus netos com facilidade. Cadastre-se e tenha acesso a uma rede de 
              profissionais. Tudo isso com praticidade. Aproveite agora!</p>
          </div>
          <div className="rectangle1">
            <div className="imgrectangle">
              <img src={tias} alt="tias" />
            </div>
            <h1>Tias</h1><br />
            <p>Tias, encontre cuidadores de confiança para seus sobrinhos em nosso aplicativo. Cadastre-se e tenha acesso a serviços
               no cuidado com seus sobrinhos. Tudo isso com praticidade!</p>
          </div>
          <div className="rectangle2">
            <div className="imgrectangle">
              <img src={playstore} alt="playstore" />
            </div>
            <h1>Onde encontrar?</h1><br />
            <p>O aplicativo em breve estará disponivel para uso, na Google Play.</p>
          </div>
          <div className="rectangle3">
            <div className="imgrectangle">
              <img src={tcc} alt="tcc" />
            </div>
            <h1>TCC</h1><br />
            <p>Surgiu como um trabalho de tcc do curso técnico em desenvolvimento de sistemas.</p>
          </div>
          </div>

      </section>
    </div>
  );
}

export default Clientes;