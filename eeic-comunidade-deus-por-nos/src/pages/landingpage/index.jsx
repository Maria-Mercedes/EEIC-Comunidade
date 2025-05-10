import './index.scss'
import Header from '../../components/secoes/header'
import SobreNos from '../../components/secoes/sobreNos'
import Servicos from '../../components/secoes/servicos'
import Infos from '../../components/secoes/infoCards'
import Footer from '../../components/secoes/footer'
import Formulario from '../../components/secoes/forms'

export default function LangingPage() {
    return (

        <div className='landingPage'>

            <Header/>

            <div className='corpo'>
                <SobreNos />

                <Servicos />

                <Infos />

                <Formulario />
            </div>

            <Footer/>

        </div>

    );
}