import './Main.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Main() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const login ={
        email: email,
        password: password
        }
        axios.post('auth/login', login)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token)
        })
    }

    const navigate = useNavigate();

    const goToRegister = () => {
        navigate('registrar')
    }

    const goToPerfil = () => {
        navigate('perfil')
    }

    const goToAcao = () => {
        navigate('destaque/acao')
    }

    const goToFPS = () => {
        navigate('destaque/fps')
    }

    const goToRPG = () => {
        navigate('destaque/RPG')
    }

    const goToMA = () => {
        navigate('destaque/MA')
    }

    return(
            <div className='root_container_menu'>
                <div className='root_container'>
                    <div className='container_card'>  
                    <h3 className='jogoDestaque'>Jogo Destaque FPS <a className='icon-star'>⭐</a></h3>
                        <img className='container_card_img'src='https://image.api.playstation.com/vulcan/ap/rnd/202110/0723/3v261owCmKqIVjnFfT3mFjyZ.png'/>
                        <p className='container_card_titulo'>COD: Warzone</p>
                        <p className='container_card_descircao'>Warzone permite um combate em um modo multijogador on-line.</p>
                        <button onClick={goToFPS} class='button' className='card_verMais'><span>Ver Mais </span></button>
                    </div>
                    <div className='container_card'>
                    <h3 className='jogoDestaque'>Jogo Destaque Ação <a className='icon-star'>⭐</a></h3>
                        <img className='container_card_img'src='https://image.api.playstation.com/cdn/UP0006/CUSA00110_00/D8Gbgtnu0ZvmVs8VloyLb0Sm9tW0wpKh.png'/>
                        <p className='container_card_titulo'>Battlefield 4</p>
                        <p className='container_card_descircao'>Battlefield 4 é um simulador realistico de guerra em varios cenários, com aviões, barcos carros e muita morte.</p>
                        <button onClick={goToAcao} class='button' className='card_verMais'><span>Ver Mais </span></button>
                    </div>
                    <div className='container_card'>
                    <h3 className='jogoDestaque'>Jogo Destaque RPG <a className='icon-star'>⭐️</a></h3>
                        <img className='container_card_img'src='https://s2.glbimg.com/y6nngNdKtYKEZx9QiZIa-bW4cq4=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/E/T/z4H0MFRxKrUlZijtEnAQ/20190522035739-1200-675-league-of-legends.jpg'/>
                        <p className='container_card_titulo'>League of Legends</p>
                        <p className='container_card_descircao'>Uma breve descrição sobre o jogo no qual vc ira comprar / jogar.</p>
                        <button onClick={goToRPG} class='button' className='card_verMais'><span>Ver Mais </span></button>
                    </div>
                    <div className='container_card'>
                    <h3 className='jogoDestaque'>Jogo Destaque M.A. <a className='icon-star'>⭐</a></h3>
                        <img className='container_card_img'src='https://cdn.mos.cms.futurecdn.net/wsoqbusZBxdAyoYUs8zr98.jpg'/>
                        <p className='container_card_titulo'>GTA: The Trilogy</p>
                        <p className='container_card_descircao'>Grand Teath Auto: The Trilogy é a junção definitiva e remasterizada das 3 grandes franquias são: III , Vici City e SA.</p>
                        <button onClick={goToMA} class='button' className='card_verMais'><span>Ver Mais </span></button>
                    </div>
                </div>                   

                <div className='root_container_account'>
                    <div className='container_card_account'>
                        <h2 className='container_card_input_h2'>Iniciar Conta</h2>

                            <form className='container_card_form' onSubmit={handleSubmit}>
                                <label className='container_card_input_label'>E-mail / usuário:</label>
                                    <input required className='container_card_input' type="text" onChange={event => setEmail(event.target.value)}></input><br></br>
                                <label className='container_card_input_label'>Senha:</label>
                                    <input required className='container_card_input' type="password" onChange={event => setPassword(event.target.value)}></input>

                                <div className='card_checkbox_account'>
                                    <input className='container_card_input_checkbox' type="checkbox" id="checkbox_account" name="checkbox"></input>
                                    <label className='card_input_checkbox' for="checkbox">Lembre-<a className='checkbox-lwr'>me neste computador</a></label>
                                </div>

                                <div className='container_card_button_login'>
                                    <button onClick={goToPerfil} className='input_btn_login'>Logar - se</button>
                                </div>
                            </form>

                            <div className='container_link_new_password'>
                                <a className='link_new_password' href="https://www.google.com/"><a className='link_np_upr' href="https://www.google.com/">P</a>roblemas no login?</a>  
                            </div>

                        <h2 className='container_card_button_register'>Não tem conta ainda?<br></br>Se registre !</h2>
                        <button onClick={goToRegister} className='input_btn_registrar'>Registrar - se</button>
                    </div>
                </div>
            </div>
    
    )
}