import './index.scss'
import InfosCards from '../../infosProjeto/index.jsx';
import infosCardsElements from './componentsElements.js';

export default function Infos() {
    return (

        <div className='pagina-infos'>

            <div className='infosProjeto'>
                <h1>PROJETO</h1>

                {infosCardsElements.map((item, index) => (
                    <InfosCards
                        key={index}
                        titulo={item.titulo}
                        conteudo={item.conteudo}
                    />
                ))}
            </div >

            <div className='info-projeto-imagem'>

            <img src="/assets/images/deus-por-nos.jpg" alt="" />
            
            </div>

        </div>

    );
}