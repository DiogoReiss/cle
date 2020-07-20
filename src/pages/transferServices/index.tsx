import React from "react";
import { Link } from "react-router-dom";
import icon from "./favicon.png";
import menuScript from "../../assets/menuTransfer";
import "./transfer.css";

import transfer from "../../assets/transfer.png";

const transferServices: React.FC = () => {
  return (
    <div id="page-transfer">
      <header>
        <div>
          <Link to="/" id="homeLogo">
            <img alt="logo" src={icon} id="homeLogo"></img>
          </Link>
          <Link to="/" id="homeLayout">
            INÍCIO
          </Link>
          <div id="servicesLayout" className="" onClick={menuScript}>
            NOSSOS SERVIÇOS
          </div>
          <Link to="/contact" id="contactsLayout">
            CONTATO
          </Link>

          <div id="servicesMenu" className="">
            <div id="menuDetail" className=""></div>
            <Link to="/orderServices" id="orderMenu" className="">
              ENCOMENDAS
            </Link>
            <Link to="/rentalServices" id="rentalMenu" className="">
              LOCAÇÃO
            </Link>
            <Link to="/transferServices" id="transferMenu" className="">
              VIAGENS
            </Link>
          </div>
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
