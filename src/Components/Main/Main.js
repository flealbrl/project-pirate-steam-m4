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


    return(
            <div className='root_container_menu'>
                <div className='root_container'>
                    <div className='container_card'>  
                    <h3 className='jogoDestaque'>Jogo Destaque FPS <a className='icon-star'>⭐</a></h3>
                        <img className='container_card_img'src='https://sogamestorrent.weebly.com/uploads/1/0/8/9/10894841/1661054_orig.jpg?312'/>
                        <p className='container_card_titulo'>Cryses WARHEAD </p>
                        <p className='container_card_descircao'>Uma breve descrição sobre o jogo no qual vc ira comprar / jogar.</p>
                        <button class='button' className='card_verMais'><span>Ver Mais </span></button>
                    </div>
                    <div className='container_card'>
                    <h3 className='jogoDestaque'>Jogo Destaque Ação <a className='icon-star'>⭐</a></h3>
                        <img className='container_card_img'src='https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png'/>
                        <p className='container_card_titulo'>Minecraft</p>
                        <p className='container_card_descircao'>Uma breve descrição sobre o jogo no qual vc ira comprar / jogar.</p>
                        <button class='button' className='card_verMais'><span>Ver Mais </span></button>
                    </div>
                    <div className='container_card'>
                    <h3 className='jogoDestaque'>Jogo Destaque RPG <a className='icon-star'>⭐️</a></h3>
                        <img className='container_card_img'src='https://image.api.playstation.com/vulcan/ap/rnd/202006/1014/ORrwkbfh9B1OwfQbPGLBsgs7.png'/>
                        <p className='container_card_titulo'>DayZ</p>
                        <p className='container_card_descircao'>Uma breve descrição sobre o jogo no qual vc ira comprar / jogar.</p>
                        <button class='button' className='card_verMais'><span>Ver Mais </span></button>
                    </div>
                    <div className='container_card'>
                    <h3 className='jogoDestaque'>Jogo Destaque M.A. <a className='icon-star'>⭐</a></h3>
                        <img className='container_card_img'src='https://3.bp.blogspot.com/-VHYAS-v3hBY/W4TGosrav7I/AAAAAAAAGUw/ySVyoLlkd6A5pBHcyNjDbNwo1idP32BngCLcBGAs/w680/csgo-capa.jpg'/>
                        <p className='container_card_titulo'>CSGO</p>
                        <p className='container_card_descircao'>Uma breve descrição sobre o jogo no qual vc ira comprar / jogar.</p>
                        <button class='button' className='card_verMais'><span>Ver Mais </span></button>
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