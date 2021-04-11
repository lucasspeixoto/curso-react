import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calc_factorial(number) {
  let n = parseInt(number)
  if (n < 0) return -1
  if (n === 0) return 1
  return calc_factorial(n - 1) * n
}

export default (props) => {

  // Ex #01
  const [number, setNumber] = useState(1)
  const [factorial, setFactorial] = useState(1)

  useEffect(function () {
    setFactorial(calc_factorial(number))
  }, [number]);

  useEffect(function () {
    if (factorial > 100000) {
      document.title = 'Vá com calma jovem'
    } else {
      document.title = 'React App'
    }
  }, [factorial])

  // Ex #02
  const [status, setStatus] = useState("Ímpar")

  useEffect(function () {
    setStatus(number % 2 === 0 ? 'Par' : 'Ímpar')
  }, [number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01"></SectionTitle>
      <div>
        <span className="text">Fatorial: </span>
        <span className="text red">{factorial === -1 ? 'Não Existe' : factorial}</span>
      </div>
      <input type="number"
        className="input"
        value={number}
        onChange={e => setNumber(e.target.value)} />

      <SectionTitle title="Exercício #02"></SectionTitle>
      <div>
        <span className="text">Status: </span>
        <span className="text red">{status} </span>
      </div>
    </div>
  )
}

