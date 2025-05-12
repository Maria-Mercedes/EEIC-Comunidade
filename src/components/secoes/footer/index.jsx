import './index.scss'
import elements from './componentsElements.js';

export default function Footer() {

    return (

        <div className='pagina-footer'>

            <div className='conteudo'>
                <h2>Entre em contato: </h2>

                {elements.map((item, index) => {
                   return <div key={index}>
                        <img src={item.img} alt=''/>
                        <p>{item.ctt}</p>
                    </div>
                })}
            </div>

        </div>

    );
}