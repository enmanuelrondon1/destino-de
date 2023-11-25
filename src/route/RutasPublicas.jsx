import { useContext } from "react"
import Contexto from "../contexto/Contexto"
import Rou2 from "./Rou2"


const RutasPublicas = ({ children }) => {
  const {logeado} = useContext(Contexto)

    return (logeado ) ?
    <Rou2/>
    :
    children 
}
export default RutasPublicas