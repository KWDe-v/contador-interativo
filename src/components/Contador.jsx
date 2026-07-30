import { useState } from 'react'
import './Contador.css'

// Componente que controla o número mostrado na tela.
// Usa o hook useState para guardar o valor atual do contador.
function Contador() {
  const [valor, setValor] = useState(0)

  function aumentar() {
    setValor(valor + 1)
  }

  function diminuir() {
    setValor(valor - 1)
  }

  function zerar() {
    setValor(0)
  }

  // Muda a cor do número conforme o valor (positivo, negativo ou zero)
  let corDoNumero = 'var(--cor-texto)'
  if (valor > 0) corDoNumero = 'var(--cor-primaria)'
  if (valor < 0) corDoNumero = 'var(--cor-perigo)'

  return (
    <section className="contador">
      <h1 className="contador__titulo">Contador Interativo</h1>

      <p className="contador__valor" style={{ color: corDoNumero }}>
        {valor}
      </p>

      <div className="contador__botoes">
        <button className="btn btn--diminuir" onClick={diminuir}>
          − Diminuir
        </button>
        <button className="btn btn--zerar" onClick={zerar}>
          Zerar
        </button>
        <button className="btn btn--aumentar" onClick={aumentar}>
          + Aumentar
        </button>
      </div>
    </section>
  )
}

export default Contador
