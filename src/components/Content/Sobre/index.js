import React from "react";
import "./style.css";
import "../../../../src/App.css";
import loja from "../../../assets/loja.png";
import atendimento from "../../../assets/atendimento.png";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-content forma">
        <h1>QUEM SOMOS NÓS?</h1>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>

        <div className="board-sobre forma">
          <div className="box-sobre">
            <img src={atendimento} alt="loja" />
          </div>
          <div className="box-sobre">
            <h2>Nossas Filiais</h2>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className="box-sobre">
            <h2>Atendimento flexível</h2>
            <p>Nossa equipe é treinada para te atender</p>
          </div>
          <div className="box-sobre">
            <img src={loja} alt="loja" />
          </div>
        </div>
      </div>
    </section>
  );
}
