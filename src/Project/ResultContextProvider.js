import React, { createContext, useState } from 'react'

export let ResultContext = createContext()

function ResultContextProvider({children}) {

    let [result,setResult] = useState("")

    let updateResult = (obj) =>
    {
        setResult(obj.message)
    }
  return (
    <div>
        <ResultContext.Provider value={[result,updateResult]}>
            {children}
        </ResultContext.Provider>
    </div>
  )
}

export default ResultContextProvider