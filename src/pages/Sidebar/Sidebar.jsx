import {
    Div,
    Img,
    Section,
    ItemMenu,
    ContainerSair,
    Title
} from './Sidebar'

import logo from '../../assets/logo.png'
import logoDashboard from '../../assets/painel-de-controle.png'
import logoOrcamentos from '../../assets/prancheta.png'
import logoNovoOrcamento from '../../assets/mais.png'
import logoPerfil from '../../assets/perfil.png'
import logoSair from '../../assets/sair.png'

function homeInicial() {

    return (
        <main>
            <Section>

                <Div className='header-lateral'>
                    <Img src={logo} alt="Logo do Projeto" />

                    <div>
                        <Title>OrçaPro</Title>
                        <Name>Orçamentos</Name>
                    </div>
                </Div>

                <div>

                    <ItemMenu>
                        <img src={logoDashboard} alt="Logo Dashboard" />
                        <p>Dashboard</p>
                    </ItemMenu>

                    <ItemMenu>
                        <img src={logoOrcamentos} alt="Logo Orçamentos" />
                        <p>Orçamentos</p>
                    </ItemMenu>

                    <ItemMenu>
                        <img src={logoNovoOrcamento} alt="Logo novo orçamento" />
                        <p> Novo Orçamento </p>
                    </ItemMenu>

                    <ItemMenu>
                        <img src={logoPerfil} alt="Logo Perfil" />
                        <p> Perfil </p>
                    </ItemMenu>

                </div>

                <ContainerSair>
                    <img src={logoSair} alt="Logo Sair" />
                    <button> Sair </button>
                </ContainerSair>

            </Section>
        </main>
    )
}

export default homeInicial