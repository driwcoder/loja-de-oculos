import React from "react";
import './style.css'
import twitter from '../../../assets/tt.png'
import insta from '../../../assets/ig.png'
import face from '../../../assets/fb.png'
import local from '../../../assets/local.png'
import tel from '../../../assets/telefone.png'
import email from '../../../assets/email.png'

export default function Contato() {
  return (
    <section className="contato">
      <div className="contato-content forma">
        <h2>Fale conosco</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
        <div className="contatos">
          <div className="contatis">
            <h3>Contato</h3>
            <div class="local">
              <img src={local} alt="" />
              <p>Nova Iguaçu, RJ</p>
            </div>
            <div class="tel">
              <img src={tel} alt="" />
              <p>(21) 9999-9999</p>
            </div>
            <div class="email">
              <img src={email} alt="" />
              <p>contato@oticavida.com</p>
            </div>
          </div>
          <div className="social">
              <h3>Nossas Redes Sociais</h3>
            <div class="face">
              <img src={face} alt="" />
              <p>/OticaVida</p>
            </div>
            <div class="insta">
              <img src={insta} alt="insta-icon" />
              <p>@oticavidarj</p>
            </div>
            <div class="twitter">
              <img src={twitter} alt="twitter-icon" />
              <p>@oticavidarj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
