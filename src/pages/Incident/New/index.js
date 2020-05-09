import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../../assets/logo.svg'
export default function IncidentNew() {
  return (
    <div className="incidentnew-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso</p>
          <Link to='/profile' className='back-link'>
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
            </Link>
        </section>
        <form action="">
          <input type="text" placeholder='Titulo do caso' />
          <textarea placeholder='Descrição' />
          <input type="text" placeholder='Valor em R$' />

          <button className="button" type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}