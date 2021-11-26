import './Cards.css';
import { useNavigate } from 'react-router';


export default function Card(props) {

  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate('game', { state: props.id })
  }

  return (
    <div className='card'>
      <div className='card-item' onClick={goToGamePage}>
        <div className='card-image'>
          <img src={props.image} alt={props.title}></img>
        </div>
        <h2 className='card-title'>{props.title}</h2>
        <span className='card-preco'>{'R$ ' + props.preco}</span>
      </div>
    </div>
  )
}