import Main from '../../Components/Main/Main';
import Buscador from '../../Components/Buscador/Buscador';
import Cards from '../../Components/Cards/Cards';
import axios from 'axios';
import Container from '../../Components/Container/Container'
import { useEffect, useState } from 'react';

export default function Home() {

    const [games, setGames] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get('/game/findMany')
        .then(response => {
            setGames(response.data)
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
    }, [mounted])

    return(
        <div className='home'>
            <Buscador/>
            <Main/>
            <Container>
                {
                    games.map(game => (
                        <Cards
                            id={game.id}
                            image={game.image}
                            title={game.name}
                            preco={game.price}
                            key={game.id}
                        />
                    ))
                }
            </Container>    
        </div>

    )
}