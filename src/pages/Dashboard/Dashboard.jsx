import { Article, Header, Section, Main, Img, Div } from './Dashboard'

import logoPesquisar from '../../assets/pesquisar.png'
import logoNotificacao from '../../assets/notificacao.png'
import logoPerfil from '../../assets/perfil.png'
import logoAprovados from '../../assets/aprovados.png'
import logoPendentes from '../../assets/pendentes.png'
import logoEstatisticas from '../../assets/estatisticas.png'
import logoOrcamentos from '../../assets/prancheta.png'

function Dashboard() {
    return (
        <Main>
            <Header>
                <div>
                    <h1>Dashboard</h1>
                    <p>Visão geral dos seus orçamentos</p>
                </div>

                <Div>
                    <img src={logoPesquisar} alt="logo pesquisar do input" />
                    <input type="text" placeholder='Buscar Orçamentos' />

                    <a href=""><Img src={logoNotificacao} alt="" /></a>
                    <a href=""><Img src={logoPerfil} alt="" /></a>
                </Div>

            </Header>

            <Section>
                <Article>
                    <div>
                        <p>Total de Orçamentos</p>
                        <p>0</p>
                    </div>

                    <Img src={logoOrcamentos} alt="" />
                </Article>

                <Article>
                    <div>
                        <p>Aprovados</p>
                        <p>0</p>
                    </div>
                    <Img src={logoAprovados} alt="" />
                </Article>

                <Article>
                    <div>
                        <p>Pendentes</p>
                        <p>0</p>
                    </div>
                    <Img src={logoPendentes} alt="" />
                </Article>

                <Article>
                    <div>
                        <p>Valor Total Aprovado</p>
                        <p>0</p>
                    </div>
                    <Img src={logoEstatisticas} alt="" />
                </Article>
            </Section>

            <section>
                <p>Orçamentos Recentes</p>

                <a href="#"> Ver Todos</a>
            </section>

        </Main>
    )
}

export default Dashboard