import { Header, Div, Img } from './style'

import logoPesquisar from '../../assets/pesquisar.png'
import logoNotificacao from '../../assets/notificacao.png'
import logoPerfil from '../../assets/perfil.png'

function headerDefault({ titulo, subtitulo }) {
    return (
        <main>
            <Header>

                <div>
                    <h1>{titulo}</h1>
                    <p>{subtitulo}</p>
                </div>

                <Div>
                    <Img src={logoPesquisar} alt="logo pesquisar do input" />
                    <input type="text" placeholder='Buscar Orçamentos' />

                    <a href=""><Img src={logoNotificacao} alt="" /></a>

                    <a href=""><Img src={logoPerfil} alt="" /></a>
                </Div>

            </Header>

        </main>
    )
}

export default headerDefault