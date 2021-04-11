import React from 'react';

export const data = {
  number: 123,
  text: "Context API"
}

const DataContext = React.createContext(data) //Podemos passar null e só inicializar no Context.Provider (<DataContext.Provider value={data}>)

export default DataContext