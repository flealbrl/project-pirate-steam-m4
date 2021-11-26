import "./Registrar.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Registrar() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNIckname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const user= {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
      passwordConfirmation: passwordConfirmation,
    }
    axios.post('user/register', user)
    .then(response => console.log(response))
  }

  const navigate = useNavigate();

  const goToPerfil = () => {
      navigate('/perfil')
  }

  return (
    <div className="registrar">
      <div className="registrar-container">

        <form className="registrar-form" onSubmit={handleSubmit}>
        <h2>Criar uma conta Pirate Steam</h2>
          <label>Nome</label>
          <input type="text" required onChange={event => setName(event.target.value)} />

          <label>Nickname</label>
          <input type="text" required onChange={event => setNIckname(event.target.value)}/>

          <label>Endereço de e-mail</label>
          <input type="email" required onChange={event => setEmail(event.target.value)}/>

          <label>Senha</label>
          <input type="password" required onChange={event => setPassword(event.target.value)}/>

          <label>Confirmar senha</label>
          <input type="password" required onChange={event => setPasswordConfirmation(event.target.value)}/>

          <div className="terms">
            <input type="checkbox" placeholder="wedewdwed" required />
            <label>
              Eu concordo com os termos do
              Acordo de usuário da conta Pirate Steam
              e confirmo que li a
              Política de privacidade da Pirate Steam.
            </label>
          </div>

          <div className="registrar-btn">
            <input onClick={goToPerfil} type="submit" value="Registar-se" />
          </div>
        </form>
      </div>
    </div>
  );
}
