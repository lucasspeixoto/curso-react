import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

  const [value, setValue] = useState(0)

  const inc = useCallback(function (delta) {
    if (delta === 0) {
      setValue(0)
    } else {
      setValue(curr => curr + delta)
    }
  }, [setValue])

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{value}</span>
        <UseCallbackButtons incFunc={inc}></UseCallbackButtons>
      </div>
    </div>
  )
}

export default UseCallback
