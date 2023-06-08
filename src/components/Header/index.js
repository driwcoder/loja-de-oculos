import React from 'react'
import './style.css'
import logo from '../../assets/logo.png'

export default function Header() {
  return(
    <header>
      <div class="header-content forma">
        <img src={logo} alt='logotipo'/>
        <nav>
          <a href='#produtos'>PRODUTOS</a>
          <a href='sobre'>SOBRE</a>
          <a href='contato'>CONTATO</a>
        </nav>
      </div>
    </header>
  )
}