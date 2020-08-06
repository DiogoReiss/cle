import React from "react";
import { Link } from "react-router-dom";
import icon from "./favicon.png";
import menuScript from "../../assets/menuRental";
import "./rental.css";
import { FiX } from "react-icons/fi";


import rentaCar from "../../assets/rentaCar.png";
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
          <section id="menuContactPageRental">
            <Link to="/" id="homeLayoutRental">
              INÍCIO
              </Link>
            <div id="servicesLayoutRental" className="">
              <h1
                id="ourServicesh1Rental"
                onClick={() => menuScript("openMenu")}
              >
                NOSSOS SERVICOS
                </h1>
              <section id="subMenuRental">
                <div id="servicesMenuRental" className="">
                  <div id="menuDetailRental" className="">
                    <div id="closeButtonRental">
                      <FiX
                        id="closeButtonRental"
                        onClick={() => menuScript("closeMenu")}
                      />
                    </div>
                  </div>
                  <Link to="/orderServices" id="orderMenuRental" className="">
                    ENCOMENDAS
                    </Link>
                  <Link
                    to="/rentalServices"
                    id="rentalMenuRental"
                    className=""
                  >
                    LOCAÇÃO
                    </Link>
                  <Link
                    to="/transferServices"
                    id="transferMenuRental"
                    className=""
                  >
                    VIAGENS
                    </Link>
                </div>
              </section>
            </div>
            <Link to="/contact" id="contactsLayoutRental">
              CONTATO
            </Link>
          </section>
        </div>
      </header>

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
