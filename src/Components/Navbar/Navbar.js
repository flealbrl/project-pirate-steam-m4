import './Navbar.css'
import logo from '../Img/steam-logo.png';
import { HiUserGroup } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi'
import { CgProfile } from "react-icons/cg";

export default function Navbar() {

    return(
        <div className='root_navbar'>
            <div className='img_logo' >
                <a href='/'><img className='root_navbar_img' src={logo} alt="Logo Steam" ></img></a>
            </div>
            <a className='navbar_btn_item'>
                <HiUserGroup/>
                <a href='/comunidade'><button className='root_navbar_btn'>Comunidade</button></a>
                <BiSupport/>
                <a href='/suporte'><button className='root_navbar_btn'>Suporte</button></a>
                <CgProfile/>
                <a href='/perfil'><button className='root_navbar_btn' href='perfil' >Perfil</button></a>
            </a>
        </div>
    )
}