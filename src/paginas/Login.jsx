import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import Contexto from '../contexto/Contexto'

const Login =() => {
  const {logearse, setReferencia} = useContext(Contexto)

  const navegacion = useNavigate()
  const login = () => {
    logearse('enma')
    navegacion('/', {replace:true})
  }

  const registro = (e)=> {
    setReferencia(e.currentTarget.value)

  }
  return (
    <>
    <section className='login'>
      <h1>Vive el pais:</h1>
      <label htmlFor='referencia' >Referencia:</label>
      <input id='referencia' onChange={registro} placeholder='Referencia de tu billete' autofocus autocomplete='off' />
      <button className='botonRegistro' onClick={login}  >Login</button>

    </section>
    </>
  )
}

export default Login