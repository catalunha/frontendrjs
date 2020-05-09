import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
export default function Login() {
  const [id, setId] = useState('')
  const history = useHistory()
  async function handleLogin(e) {
    const data = { id }
    e.preventDefault()
    try {
      const response = await api.post('sessions', data)
      localStorage.setItem('ongId',id)
      localStorage.setItem('ongName',response.data.name)
      console.log(response.data.name)
      history.push('/profile')
    } catch (error) {
      alert('Falha no login.')
    }
  }
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input placeholder='Sua identificação' value={id} onChange={e => setId(e.target.value)} ></input>
          <button className='button' type='submit'>Entrar</button>
          <Link to='/register' className='back-link'>
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>

  )
} 