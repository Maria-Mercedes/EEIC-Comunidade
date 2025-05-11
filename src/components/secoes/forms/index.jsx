import './index.scss'

export default function Formulario() {
    return (
        <div className='pagina-form'>
           <h1>SEJA UM VOLUNTARIO</h1>

            <form action="https://formsubmit.co/rodriguesmaria860@gmail.com" method="POST">
                <input type='hidden' name='_captcha' value="false"></input>
                <label for="nome">Nome Completo</label>
                <input type='text' name='nome' required></input>

                <label for="numeroCel">Número de telefone</label>
                <input type='text' name='numeroCel' required></input>

                <label for="email">Email</label>
                <input type='text' name='email' required></input>

                <button type='submit'>QUERO SER UM VOLUNTARIO</button>
            </form>
        </div>
    );
}