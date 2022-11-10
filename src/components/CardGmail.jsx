import React from "react";

import inbox from "../img/envelope.svg";
import socil from "../img/comercial.svg";
import promocao from "../img/rotulo.svg";
import estrela from "../img/estrela.png";
import cursorone from "../img/Group.svg";
import cursortwo from "../img/cursor.png";
import verifica from "../img/verifica.png";
export const CardMain = ({ test }) => {
  return (
    <div className="card-guia">
      <div className="card-guia-card">
        <ul className="card-guia_list-one">
          <li>
            <img src={inbox} alt="" /> Principal
          </li>
          <li>
            <img src={socil} alt="" /> Social
          </li>
          <li>
            <img src={promocao} alt="" /> Promoções
          </li>
          <li>
            <img src={cursortwo} alt="" />
          </li>
        </ul>
        <ul className="card-guia_list-two">
          <li>
            <img src={verifica} alt="" />
          </li>
          <li>
            <img src={estrela} alt="" /> Natã Martins
            <span>novo</span>
          </li>
          <li>
            Importande: confirme sua inscrição na NewSletter! -
            <span> click no botão</span>
          </li>
          <li>16:20</li>
          <span className="card-guia_list-two-cursor-pointer">
            <img src={cursorone} alt="" />
          </span>
        </ul>
      </div>
      <ul className="card-guia_list-three">
        <li>1 passo: Click na caixa Promoções</li>
        <li>2 passo: Click e arraste seu email para caixa Principal</li>
        <li>3 passo: Agora verifique sua caixa Principal</li>
      </ul>
    </div>
  );
};
