import { Article, Section, Main, Img } from './Dashboard'
import HeaderDefault from '../../components/Header/header'

import logoAprovados from '../../assets/aprovados.png'
import logoPendentes from '../../assets/pendentes.png'
import logoEstatisticas from '../../assets/estatisticas.png'
import logoOrcamentos from '../../assets/prancheta.png'

function Dashboard() {
    return (
        <Main>
            <HeaderDefault
                titulo="Orçamentos"
                subtitulo="Visão Geral dos seus orçamentos"
            />

            <section>
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
            </section>

            <Section>
                <p>Orçamentos Recentes</p>

                <a href="#"> Ver Todos</a>
            </Section>

        </Main>
    )
}

export default Dashboard