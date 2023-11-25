import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Nabvar = () => {
  const navegacion = useNavigate()
  const {deslogearse} = useContext(Contexto)


  const logout =() => {
    deslogearse() 
    navegacion('/login', {replace:true})

  }


  
  return (
    <>
      <nav>
        <div>
          <NavLink to="/cp">Capital y Patagonia</NavLink>
          <NavLink to="/no">Norte y Este</NavLink>
          <NavLink to="/viaje">Mi viaje</NavLink>
        </div>
        <button onClick={logout}>Logout</button>
      </nav>
    </>
  );
};

export default Nabvar;
