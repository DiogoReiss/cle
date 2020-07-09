import React from "react";
import { Link } from "react-router-dom";
import icon from "./favicon.png";
import menuScript from "../../assets/menu";
import "./order.css";

import vector from "../../assets/Vector 1.png";
import orders from "../../assets/orders.jpg";

const orderServices: React.FC = () => {
  return (
    <div id="page-order">
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
        <h1 id="ourServices">Nós entregamos a sua encomenda</h1>
      </div>
      <div id="ourServicesDescription">
        <h2 id="ourServicesDescription">
          Sabe aquele documento ou encomenda que você tem que entregar para uma
          pessoa que está centenas de quilômetros longe de ti? Nós entregamos a
          sua encomenda cobrando um precinho bacana!
        </h2>
      </div>
      <img alt="vector" src={vector} id="vector1"></img>
      <div id="orderImage">
        <img alt="encomendas" src={orders} id="orderImage"></img>
      </div>
    </div>
  );
};

export default orderServices;
