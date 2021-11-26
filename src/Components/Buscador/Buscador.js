import './Buscador.css';

import { FaSearchPlus } from 'react-icons/fa';

export default function Buscador() {
  return (
    <div className='buscador'>
      <span className='procurar'>Procurar :</span>
      <form className='buscador-input'>
        <input className='type' type='text' placeholder='Procurar o jogo pelo seu título.'></input>
      </form>
        <input className='btn' type='submit' value='Buscar'/>
    </div>
  )
}