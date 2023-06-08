import React from "react";
import './style.css'
import oculos1 from '../../../assets/oculos01.png'
import oculos2 from '../../../assets/oculos02.png'
import oculos3 from '../../../assets/oculos03.png'
import oculos4 from '../../../assets/oculos04.png'

export default function Produtos() {
  return (
    <section className="produtos" id="produtos">
      <div className="produtos-content forma">
        <h1>Nossos produtos</h1>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil. Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        <div className="board forma">
          <div className="oculos"> 
            <h2>Óculos de grau</h2>
            <img src={oculos1} alt="oculos1"/> 
            <p>R$ 500,00</p>
          </div>
          <div className="oculos"> 
            <h2>Óculos transition</h2>
            <img src={oculos2} alt="oculos2"/> 
            <p>R$ 750,00</p>
          </div>
          <div className="oculos"> 
            <h2>Óculos de sol</h2>
            <img src={oculos3} alt="oculos3"/> 
            <p>R$ 700,00</p>
          </div>
          <div className="oculos"> 
            <h2>Óculos infantil</h2>
            <img src={oculos4} alt="oculos4"/> 
            <p>R$ 500,00</p>
          </div>
        </div>
        <p>Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}
