import './App.css'
import Info1V from './components/Info1V'
import Card from './components/Card'
import ScopeReduces from './components/ScopeReduces'
import { useState } from 'react'

function App() {

  const maximo = 3
  const minimo = 1
  const [cont, setCont] = useState(minimo)


  function avancar() {
    if (cont < maximo) {
      setCont(cont + 1)
    }
  }

  function voltar() {
    if (cont > minimo) {
      setCont(cont - 1)
    }
  }

  let content;
  if (cont === 1) {
    content = <Info1V />
  } else if (cont === 2) {
    content = <Card />
  } else if (cont === 3) {
    content = <ScopeReduces />
  }

  return (
    <div className='body'>
      <h1>Galeria de componentes</h1>
      <section className='screen'>
        {content}
      </section>
      <div className="buttons">
        <button onClick={voltar} className='btn btnVoltar'>⬅</button>
        <button onClick={avancar} className='btn btnAvancar'>➡</button>
      </div>
    </div>
  )
}

export default App
