"use client"

const { createContext, useState } = require("react");



let Api = createContext()
function ContextApi({children}){
    const [filmsData, setFilmsData] = useState([])
    const [searchStatus , setSearchStatus] = useState(false)
    return(
        <Api.Provider value={{filmsData , setFilmsData , searchStatus , setSearchStatus}}>
            {children}
        </Api.Provider>
    )
}
export {Api , ContextApi}