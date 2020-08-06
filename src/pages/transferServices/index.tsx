import React from "react";
import { Link } from "react-router-dom";
import icon from "./favicon.png";
import menuScript from "../../assets/menuTransfer";
import "./transfer.css";
import { FiX } from "react-icons/fi";


import transfer from "../../assets/transfer.png";

const transferServices: React.FC = () => {
  return (
    <div id="page-transfer">
      <header>
        <div>
          <Link to="/" id="homeLogo">
            <img alt="logo" src={icon} id="homeLogo"></img>
          </Link>
          <section id="menuContactPageTransfer">
            <Link to="/" id="homeLayoutTransfer">
              INÍCIO
              </Link>
            <div id="servicesLayoutTransfer" className="">
              <h1
                id="ourServicesh1Transfer"
                onClick={() => menuScript("openMenu")}
              >
                NOSSOS SERVICOS
                </h1>
              <section id="subMenuTransfer">
                <div id="servicesMenuTransfer" className="">
                  <div id="menuDetailTransfer" className="">
                    <div id="closeButtonTransfer">
                      <FiX
                        id="closeButtonTransfer"
                        onClick={() => menuScript("closeMenu")}
                      />
                    </div>
                  </div>
                  <Link to="/orderServices" id="orderMenuTransfer" className="">
                    ENCOMENDAS
                    </Link>
                  <Link
                    to="/rentalServices"
                    id="rentalMenuTransfer"
                    className=""
                  >
                    LOCAÇÃO
                    </Link>
                  <Link
                    to="/transferServices"
                    id="transferMenuTransfer"
                    className=""
                  >
                    VIAGENS
                    </Link>
                </div>
              </section>
            </div>
            <Link to="/contact" id="contactsLayoutTransfer">
              CONTATO
            </Link>
          </section>
        </div>
      </header>

      <div id="ourServices">
        <h1 id="transferServicesTitle">Nós te levamos até o seu destino!</h1>
      </div>
      <div id="ourServicesDescription">
        <h2 id="transferServicesDescription">
          Agende a sua viagem agora, nós te levamos exatamente onde você
          precisa! Nesse momento de crítico de pandemia disponibilizamos o nosso
          tempo para otimizar o seu ! Chegue rapidamente onde você deseja.
        </h2>
      </div>
      <div id="transferImage">
        <img alt="encomendas" src={transfer} id="transferImage"></img>
      </div>
    </div>
  );
};

export default transferServices;
