import React from "react";
import { Link } from "react-router-dom";
import icon from "./favicon.png";
import menuScript from "../../assets/menu";
import "./styles.css";

import vector from "../../assets/Vector 1 (2).png";
import rentaCar from "../../assets/rentaCar.jpg";
import car from "../../assets/gol.png";
import saveiro from "../../assets/saveiro.png";
import vans from "../../assets/fiat van.png";
import truck from "../../assets/caminhao.png";

const rentalServices: React.FC = () => {
  return (
    <div id="page-rentacar">
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

      <img alt="vetor " src={vector} id="vector3"></img>
      <img alt="aluguel" src={rentaCar} id="rentalImage"></img>
      <h1 id="rentaCarOptions">
        Alugue um carro de acordo com a sua necessidade
      </h1>
      <section id="rentOptions">
        <div id="comumCar">
          <div id="comumCarImage">
            <img alt="Carro" src={car} id="golImage"></img>
          </div>
          <h1 id="gol">PASSEIO</h1>
        </div>
        <div id="comumCar2">
          <div id="comumCarImage">
            <img alt="saveiro" src={saveiro} id="saveiroImage"></img>
          </div>
          <h1 id="saveiro">UTILITÁRIO</h1>
        </div>
        <div id="comumCar3">
          <div id="comumCarImage">
            <img alt="vans" src={vans} id="vanImage"></img>
          </div>
          <h1 id="van">VANS</h1>
        </div>
        <div id="comumCar4">
          <div id="comumCarImage">
            <img alt="caminhão" src={truck} id="truckImage"></img>
          </div>
          <h1 id="caminhao">CAMINHÃO</h1>
        </div>
      </section>
    </div>
  );
};

export default rentalServices;
