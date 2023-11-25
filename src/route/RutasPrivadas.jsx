import { useContext } from "react"
import Contexto from "../contexto/Contexto"
import { Navigate } from "react-router-dom"


const RutasPrivadas = ({ children }) => {

  const { logeado } = useContext(Contexto)

  return ( logeado)
   ? children 
   : <Navigate to ='/login' />
}

export default RutasPrivadas