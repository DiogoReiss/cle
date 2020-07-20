import React from "react";

import { Link } from "react-router-dom";
import logo from "./favicon.png";
import scripts from "../../assets/scripts";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div id="homeLogo">
        <Link to="/" id="homeLogo">
          <img alt="logo" src={logo} id="homeLogo"></img>
        </Link>
      </div>
      <div id="express">
        <h1 id="chegaLogo">CHEGALOGO</h1>
        <h2 id="express">ENCOMENDAS EXPRESS</h2>
      </div>
      <section id="linkButtons">
        <div id="homeButton">
          <Link to="/contact" id="contactButton">
            CONTATO
          </Link>
        </div>
        <div id="aboutButton" className="" onClick={scripts}>
          <Link to="" id="aboutButton" onClick={scripts}>
            NOSSO SERVIÇO
          </Link>
        </div>
      </section>
      <section id="options">
        <div id="orderButton" className="">
          <Link to="/orderServices" id="orderServices">
            ENCOMENDAS
          </Link>
        </div>
        <div id="transferButton" className="">
          <Link to="/transferServices" id="transferServices">
            VIAGENS
          </Link>
        </div>
        <div id="rentalButton" className="">
          <Link to="/rentalServices" id="rentalServices">
            LOCAÇÃO
          </Link>
        </div>
      </section>
      <div id="footer">
        EMAIL: rrlocacao2017@gmail.com NUMERO: (71) 9 8719-2060
      </div>
    </div>
  );
};

export default Home;
