import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

  //Exercício #01
  const { state, setState } = useContext(DataContext)
  function addNumber(delta) {
    setState({
      ...state, //Precisamos manter os outros parâmetros aqui, caso contrário, o objeto data, passa a ser apenas o que alteramos, no caso {number: n}
      number: state.number + delta
    })
  }

  //Exercício #02
  const { number, text, setNumber, setText } = useContext(AppContext)

  useEffect(function(){
    if(number>=140){
      setText('Vai com calma Jovem...')
    }
  }, [number])

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>

        <div>
          <button className="btn" onClick={_ => addNumber(+1)}> +1 </button>
          <button className="btn" onClick={_ => addNumber(-1)}> -1 </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button
            className="btn"
            onClick={_ => setNumber(number + 1)}> +1 </button>
          <button
            className="btn"
            onClick={_ => setNumber(number - 1)}> -1 </button>
        </div>
      </div>
    </div>
  )
}

export default UseContext;
