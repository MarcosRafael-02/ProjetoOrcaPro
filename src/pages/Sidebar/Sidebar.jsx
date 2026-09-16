import {
    Div,
    Img,
    Main,
    Name,
    Section,
    ItemMenu,
    ContainerMenu,
    ContainerSair,
    Title
} from './Sidebar'

import logo from '../../assets/logo.png'
import logoDashboard from '../../assets/painel-de-controle.png'
import logoOrcamentos from '../../assets/prancheta.png'
import logoNovoOrcamento from '../../assets/mais.png'
import logoPerfil from '../../assets/perfil.png'
import logoSair from '../../assets/sair.png'
import logoPesquisar from '../../assets/pesquisar.png'
import logoNotificacao from '../../assets/notificacao.png'
import logoAprovados from '../../assets/aprovados.png'
import logoPendentes from '../../assets/pendentes.png'
import logoEstatisticas from '../../assets/estatisticas.png'

function homeInicial() {

    return (
        <Main>
            <Section>

                <Div className='header-lateral'>
                    <Img src={logo} alt="Logo do Projeto" />

                    <div>
                        <Title>OrçaPro</Title>
                        <Name>Orçamentos</Name>
                    </div>
                </Div>

                <ContainerMenu>

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

                </ContainerMenu>

                <ContainerSair>
                    <img src={logoSair} alt="Logo Sair" />
                    <button> Sair </button>
                </ContainerSair>

            </Section>
            {/*  
            <section>
                <div>
                    <div>
                        <p>Dashboard</p>
                        <p>Visão geral dos seus orçamentos</p>
                    </div>

                    <div>
                        <Img src={logoPesquisar} alt="Logo de pesquisa" />
                        <input type="text" placeholder='Buscar Orçamentos' />
                    </div>

                    <div>
                        <Img src={logoNotificacao} alt="Logo Notificação" />

                        <Img src={logoPerfil} alt="Logo Perfil" />
                    </div>
                </div>
            </section>

            <section>
                <article>
                    <div>
                        <p>Total de Orçamentos</p>
                        <Img src={logoOrcamentos} alt="" />
                    </div>

                    <p> 0 </p>
                </article>

                <article>
                    <div>
                        <p>Aprovados</p>
                        <Img src={logoAprovados} alt=" Logo de projetos aprovados" />
                    </div>
                    <p> 0 </p>
                </article>

                <article>
                    <div>
                        <p>Pendentes</p>
                        <Img src={logoPendentes} alt=" Logo de projetos pendentes" />
                    </div>
                    <p> 0 </p>
                </article>

                <article>
                    <div>
                        <p>Valor total aprovado</p>
                        <Img src={logoEstatisticas} alt="Logo de valor total de orçamentos aprovados" />
                    </div>
                    <p> R$ 00,00 </p>
                </article>
            </section>

            <section>
                <div>
                    <p>Orçamentos Recentes</p>
                    <button>Ver Todos</button>
                </div>

            </section>
            */}
        </Main>
    )
}

export default homeInicial