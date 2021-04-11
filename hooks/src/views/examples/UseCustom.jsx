import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { useCounter } from '../../useCounter'
import { useFetch } from '../../useFetch'

const UseRef = (props) => {

  //Exercício #01
  const [count, setInc, setDec] = useCounter(0)

  //Exercício #02
  const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    
  const response = useFetch(url)
  console.log(response)

  function showStates(states) {
    return states.map(state => <li key={state.nome}>{`${state.nome} - ${state.sigla}`}</li>)
  }

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercício#01"></SectionTitle>
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button
            className="btn"
            onClick={() => setInc()}>+1</button>
          <button
            className="btn"
            onClick={() => setDec()}>-1</button>
        </div>
      </div>
      <SectionTitle title="Exercício#02"></SectionTitle>
      <div className="center">
        <ul>
          {response.data ? showStates(response.data) : false}
        </ul>
      </div>
    </div>
  )
}

export default UseRef
