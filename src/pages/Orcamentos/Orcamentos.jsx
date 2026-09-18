import { Main, Header, Div, Img } from './Orcamentos'

import logoPesquisar from '../../assets/pesquisar.png'
import logoNotificacao from '../../assets/notificacao.png'
import logoPerfil from '../../assets/perfil.png'

function Orcamentos() {
    return (
        <Main>

            <Header>

                <div>
                    <h1>Orçamentos</h1>
                    <p>0 orçamentos encontrados</p>
                </div>

                <Div>
                    <Img src={logoPesquisar} alt="logo pesquisar do input" />
                    <input type="text" placeholder='Buscar Orçamentos' />
                    <a href=""><Img src={logoNotificacao} alt="" /></a>
                    <a href=""><Img src={logoPerfil} alt="" /></a>
                </Div>

            </Header>

            <section>
                <div>
                    <Img src={logoPesquisar} alt='logo pesquisar do input' />
                    <input type="text" />
                </div>

                <div></div>
            </section>

            <section>
                <div>

                </div>
            </section>

        </Main>
    )
}

export default Orcamentos