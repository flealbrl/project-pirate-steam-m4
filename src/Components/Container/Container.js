import './Container.css';
import { IoLogoGameControllerB } from 'react-icons/io'

export default function Container(props) {
  return (
    <div className='container-div'>
      <div className='h2_container'>
      <h2 className='container-title'>Todos os Jogos<IoLogoGameControllerB/> </h2>
      </div>
      <div className='container-cards'>
        {props.children}
      </div>
    </div>
  )
}