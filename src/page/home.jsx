import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import developer from "../img/envelope.svg";

export function Home() {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) return alert("Ops!, digite um email valido.");
    return handleTeste();
  };

  function handleTeste() {
    navigate("/GuiaGmail");
  }

  return (
    <div className="container-main">
      <img src={developer} alt="" />
      <h1>Notícias de Tecnologia para quem não tem tempo de ler notícias.</h1>
      <div className="container-main_card-form">
        <input
          type="text"
          id="email"
          value={email}
          placeholder="Seu Email Principal..."
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}
