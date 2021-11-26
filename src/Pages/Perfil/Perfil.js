import './Perfil.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Perfil(props) {

  const [user, setUser] = useState('');
  const [mounted, setMounted] = useState(false);
  const [noLogin, setNoLogin] = useState(true);

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Autorization: `Bearer ${token}` }
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNoLogin(false)
        setUser(response.data)
      })
    }

  }, [mounted])

  return (
    <div className='perfil'>
      <div className='perfil-img'>
        <img src='https://earncashto.com/wp-content/uploads/2021/06/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' alt='Foto do Perfil' />
      </div>
      {
        !noLogin ? (
          <>
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
          </>
        ): (
          <h2>Usuário não logado, faça login para visualizar seu perfil.</h2>
        )
      }
    </div>
  )
}