import './Footer.css'
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'


export default function Footer() {
    return(
        <div className='container_footer'>
            <div className='container_footer_sociais'>
                <FaGithubSquare/>
                <a className='footer_sociais' href="url" target='_blank'>Github</a>
                <FaFacebookSquare/>
                <a className='footer_sociais' href="url" target='_blank'>Facebook</a>
                <AiFillInstagram/>
                <a className='footer_sociais' href="url" target='_blank'>Instagram</a>
                <FaLinkedin/>
                <a className='footer_sociais' href="url" target='_blank'>Linkedin</a>
            </div>

            <div className='container_footer_dados'>
                <h2 className='footer_dados_h2'>© 2021 Pirate Steam. Todos os direitos reservados.<br></br> Todas as marcas são propriedade dos seus respectivos donos no BRA e em outros países.<br></br>
                Está é uma obra fictícia/personalizada da Steam.</h2>
                <h3 className='footer_dados_h3'>Team Pirate Steam ©</h3>
            </div>
        </div>
    )
}