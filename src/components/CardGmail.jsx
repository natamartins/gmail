import React from "react";

// import imgs
import inbox from "../img/envelope.svg";
import socil from "../img/comercial.svg";
import promocao from "../img/rotulo.svg";
import estrela from "../img/estrela.png";
import verifica from "../img/verifica.png";
import cursor from "../img/Group.svg";

export const CardMain = () => {
  return (
    <div className="card-guia">
      <h1>
        O email de confirmação que enviamos para você possivelmente caiu na
        caixa de Promoções do seu Gmail.
      </h1>
      <div className="card-guia_container">
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
        </ul>
        <ul className="card-guia_list-two">
          <li className="card-guia_animated-img">
            <img src={cursor} alt="" />
          </li>
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
          <li>
            <span>16:20</span>
          </li>
        </ul>
      </div>
      <ul className="card-guia_list-three">
        <li>1 - passo: Click na caixa Promoções</li>
        <li>2 - passo: Click e arraste seu email para caixa Principal</li>
        <li>3 - passo: Agora verifique sua caixa Principal</li>
      </ul>
    </div>
  );
};
