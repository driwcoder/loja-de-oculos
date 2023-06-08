import React from "react";
import "./style.css";
import banner from '../../../assets/capa.png'
export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
          <img src={banner} alt="banner" />
          <div>
            <p>Preços baixos em </p>
            <h1>Óculos de grau e de sol</h1>
            <p>Você só encontra aqui</p>
          </div>
      </div>
    </section>
  );
}
