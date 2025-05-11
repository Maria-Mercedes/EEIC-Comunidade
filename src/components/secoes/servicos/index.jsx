import './index.scss'
import ServicosCards from '../../servicosCards/index.jsx';
import servicosCardsElements from './componentsElements.js';

export default function Servicos() {
    return (

        <div className='pagina-servicos'>

            <h1>EVENTOS E AÇÕES BENEFICENTES</h1>

            <p>A Ação Deus por Nós conta com o apoio de:</p>

            <div className='cards'>
                {servicosCardsElements.map((item, index) => (
                    <ServicosCards
                        key={index}
                        image={item.image}
                        titulo={item.titulo} />
                ))}
            </div>

        </div>

    );
}