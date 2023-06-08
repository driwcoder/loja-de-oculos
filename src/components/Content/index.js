import React from 'react'

import Banner from './Banner'
import Produtos from './Produtos'
import Sobre from './Sobre'
import Contato from './Contato'

export default function Content() {
  return(
    <section>
      <Banner />
      <Produtos />
      <Sobre />
      <Contato />
    </section>
  )
}