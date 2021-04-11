import React, { useState, useEffect, useRef, useCallback, FormEvent } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function (x1, x2) {
  return [...x1].map((e, i) => `${e || ""}${x2[i] || ""}`).join("")
}

export default (props) => {

  const nameInputRef = useRef(null)
  const acceptTermsRef = useRef({ value: false })

  const handleSubmit = useCallback((e, FormEvent) => {
    e.preventDefault() //Cancela o evento padrão, que é a renderização do componente ao clicar no botão
    nameInputRef.current.focus()

    console.log(nameInputRef.current.value)
    console.log(acceptTermsRef.current.value)
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])

  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const count = useRef(0)

  const myInput1 = useRef(null)
  const myInput2 = useRef(null)

  useEffect(() => {
    //console.log([...myInput1.current.value.toString()].pop())
    count.current++ /* Não entra em renderização infinita, pois alteração
        do valor atual de useRef, não renderiza novamente o componente */
    //Colocando dentro de useEffect, só chamaremos o incremento quando value1 for alterado
    myInput2.current.focus()
  }, [value1])

  useEffect(() => {
    //console.log([...myInput2.current.value.toString()].pop())
    count.current++
    myInput1.current.focus()
  }, [value2])

  useEffect(() => {
    nameInputRef.current?.focus() /* Na primeira renderização, o valor current é vazio, ja que o 
        input ainda não foi renderizado, para isso, podemos usar o '?', para focar quando estivar disponível */
  })

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input type="text" className="input"
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02"></SectionTitle>

      <div className="center">
        <input type="text" className="input"
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)} />
      </div>
      <SectionTitle title="Exercício #03"></SectionTitle>
      <div className="center">
        <form onSubmit={handleSubmit}>
          <input type="text"
            className="input"
            placeholder="Digite seu nome..."
            ref={nameInputRef} />
          <button type="button" className="btn" onClick={handleAcceptTerms}>
            Aceitar Termos
                    </button>
          <button type="submit" className="btn">Enviar</button>

        </form>
      </div>
    </div>

  )
}
