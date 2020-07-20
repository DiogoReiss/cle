import React from "react";
import { Link } from "react-router-dom";
import icon from "./favicon.png";
import menuScript from "../../assets/menuOrder";
import "./order.css";
import { FiX } from "react-icons/fi";

import orders from "../../assets/orders.png";

const orderServices: React.FC = () => {
  return (
    <div id="page-order">
      <header>
        <div>
          <Link to="/" id="homeLogo">
            <img alt="logo" src={icon} id="homeLogo"></img>
          </Link>
          <section id="menuContactPageOrder">
            <Link to="/" id="homeLayoutOrder">
              INÍCIO
              </Link>
            <div id="servicesLayoutOrder" className="">
              <h1
                id="ourServicesh1Order"
                onClick={() => menuScript("openMenu")}
              >
                NOSSOS SERVICOS
                </h1>
              <section id="subMenuOrder">
                <div id="servicesMenuOrder" className="">
                  <div id="menuDetailOrder" className="">
                    <div id="closeButtonOrder">
                      <FiX
                        id="closeButtonOrder"
                        onClick={() => menuScript("closeMenu")}
                      />
                    </div>
                  </div>
                  <Link to="/orderServices" id="orderMenuOrder" className="">
                    ENCOMENDAS
                    </Link>
                  <Link
                    to="/rentalServices"
                    id="rentalMenuOrder"
                    className=""
                  >
                    LOCAÇÃO
                    </Link>
                  <Link
                    to="/transferServices"
                    id="transferMenuOrder"
                    className=""
                  >
                    VIAGENS
                    </Link>
                </div>
              </section>
            </div>
            <Link to="/contact" id="contactsLayoutOrder">
              CONTATO
            </Link>
          </section>
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
      <div id="orderImage">
        <img alt="encomendas" src={orders} id="orderImage"></img>
      </div>
    </div>
  );
};

export default orderServices;
