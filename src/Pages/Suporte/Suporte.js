import "./Suporte.css";

export default function Suporte() {
  return (
    <div className="suporte">
      <div className="suporte-container">
        <form className="suporte-form">
        <h2>SUPORTE STEAM</h2>
          <label>Nome</label>
          <input type="text" required placeholder='Digite seu nome e sobrenome.'/>

          <label>Endereço de e-mail</label>
          <input type="email" required placeholder='Digite seu E-mail.'/>

          <label>Título do problema</label>
          <input type="text" required placeholder='Digite o título do problema.'/>

          <label>Descrição do problema</label>
          <input type="text" required placeholder='Escreva detalhadamente o seu problema.'/>

          <div className="suporte-btn">
            <input type="submit" value="Enviar para o suporte" />
          </div>
        </form>
      </div>
    </div>
  );
}
