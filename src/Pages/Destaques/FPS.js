import './Destaques.css'

export default function FPS() {

  return(
    <div className='game'>
      <div className='game-header'>
        <img src='http://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/AGB_WZ_0309_TOUT.jpg' alt='Destaque Jogo FPS'/>
      </div>
      <h2>Call of Duty: Warzone</h2>

      <div className='priceYear'>
      <h3 className='year'>2021</h3>
      <h3 className='price'>R$ 180,00🛒</h3>  
      </div>
      <p>Warzone permite um combate em um modo multijogador on-line entre 150 jogadores na cidade fictícia de Verdansk, que é vagamente baseada na cidade de Donetsk, no leste da Ucrânia. Ele apresenta uma progressão de plataforma-cruzada entre os dois jogos.</p>
</div>
  )
}