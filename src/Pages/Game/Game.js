import './Game.css'
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Game(props) {

  const state = useLocation();
  const id = state.state;
  
  const [game, setGame] = useState({});
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/game/find/${id}`)
    .then(response => {
      if(mounted) {
        setGame(response.data)
        console.log(game)
      }
    })
  }

  useEffect (() => {
    setMounted(true)
    getData()
  }, [mounted])

  return(
    <div className='game'>
      <div className='game-header'>
        <img src={game.image} alt={game.title} />
      </div>
      <h2>{game.title}</h2>

      <div className='priceYear'>
      <h3 className='year'>{game.year}</h3>
      <h3 className='price'>{'R$' + game.price} 🛒</h3>  
      </div>
      <p>{game.storyline}</p>
</div>
  )
}