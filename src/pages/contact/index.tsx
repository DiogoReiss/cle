import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import { FiX } from "react-icons/fi";

import icon from "./favicon.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import app from "../../assets/app.png";
import instagram from "../../assets/instagram.png";
import arrow1 from "../../assets/down-arrow.png";
import arrow2 from "../../assets/down-arrow.png";
import menuScript from "../../assets/menu.js";

const Contact: React.FC = () => {
  return (
    <div id="contact-page">
      <header>
        <div>
          <Link to="/" id="homeLogo">
            <img alt="logo" src={icon} id="homeLogo"></img>
          </Link>
          <section id="menuContactPage">
            <Link to="/" id="homeLayoutContact">
              INÍCIO
            </Link>
            <div id="servicesLayoutContact" className="">
              <h1
                id="ourServicesh1Contact"
                onClick={() => menuScript("openMenu")}
              >
                NOSSOS SERVICOS
              </h1>
              <section id="subMenuContact">
                <div id="servicesMenuContact" className="">
                  <div id="menuDetailContact" className="">
                    <div id="closeButtonContact">
                      <FiX
                        id="closeButtonContact"
                        onClick={() => menuScript("closeMenu")}
                      />
                    </div>
                  </div>
                  <Link to="/orderServices" id="orderMenuContact" className="">
                    ENCOMENDAS
                  </Link>
                  <Link
                    to="/rentalServices"
                    id="rentalMenuContact"
                    className=""
                  >
                    LOCAÇÃO
                  </Link>
                  <Link
                    to="/transferServices"
                    id="transferMenuContact"
                    className=""
                  >
                    VIAGENS
                  </Link>
                </div>
              </section>
            </div>
            <Link to="/contact" id="contactsLayoutContact">
              CONTATO
            </Link>
          </section>
        </div>
      </header>
      <section id="contactButtons">
        <div id="numberGrid">
          <div id="number">
            <h1 id="number">(71) 98719-2060</h1>
            <div id="numberIcon">
              <img alt="celular" src={phone} id="phoneIcon"></img>
            </div>
          </div>
        </div>
        <div id="emailGrid">
          <div id="email">
            <h1 id="email">rrlocacao2017@gmail.com</h1>
            <div id="emailIcon">
              <img alt="email" src={email} id="emailIcon"></img>
            </div>
          </div>
        </div>
        <div id="whatsappGrid">
          <div id="whatsapp">
            <a href="https://bit.ly/3iCUyk0">
              <h1 id="whatsapp">(71) 98719-2060</h1>
            </a>
            <div id="wppIcon">
              <a href="https://bit.ly/3iCUyk0">
                <img alt="WhatsApp" src={app} id="wppIcon"></img>
              </a>
            </div>
          </div>
        </div>
        <div id="instagramGrid">
          <div id="instagram">
            <a href="https://www.instagram.com/chegalogoexpress/">
              <h1 id="instagram">@chegalogoexpress</h1>
            </a>
            <div id="instagramIcon">
              <a href="https://www.instagram.com/chegalogoexpress/">
                <img alt="instagram" src={instagram} id="instagramIcon"></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div id="firstArrow">
        <img alt="arrow" src={arrow1} id="firstArrow"></img>
      </div>
      <div id="secondArrow">
        <img alt="arrow" src={arrow2} id="secondArrow"></img>
      </div>

      <h1 id="nossosContatos">NOSSOS CONTATOS</h1>
    </div>
  );
};

export default Contact;
