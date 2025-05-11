import './index.scss'

export default function InfosCards(props) {
    return (

        <div className='component-infosProjeto'>

            <ul><li>{props.titulo}</li></ul>

            <p>{props.conteudo}</p>

        </div>

    );
}