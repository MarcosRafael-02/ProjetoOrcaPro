import { } from './home'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    return (
        <main>
            <section>

                <div>
                    <img src={logo} alt="Logo do Projeto" />
                    <div>
                        <h1>OrçaPro</h1>
                        <p>Orçamentos</p>
                    </div>
                </div>

                <div>

                    <div>
                        <img src={logoDashboard} alt="Logo Dashboard" />
                        <p>Dashboard</p>
                    </div>

                    <div>
                        <img src={logoOrcamentos} alt="Logo Orçamentos" />
                        <p>Orçamentos</p>
                    </div>

                    <div>
                        <img src={logoNovoOrcamento} alt="Logo novo orçamento" />
                        <p> Novo Orçamento </p>
                    </div>

                    <div>
                        <img src={logoPerfil} alt="Logo Perfil" />
                        <p> Perfil </p>
                    </div>

                </div>

                <div>
                    <img src={logoSair} alt="Logo Sair" />
                    <button> Sair </button>
                </div>

            </section>

            <section>
                <div>
                    <div>
                        <p>Dashboard</p>
                        <p>Visão geral dos seus orçamentos</p>
                    </div>

                    <div>
                        <img src={logoPesquisar} alt="Logo de pesquisa" />
                        <input type="text" placeholder='Buscar Orçamentos' />
                    </div>

                    <div>
                        <img src={logoNotificacao} alt="Logo Notificação" />

                        <img src={logoPerfil} alt="Logo Perfil" />
                    </div>
                </div>
            </section>

            <section>
                <article>
                    <div>
                        <p>Total de Orçamentos</p>
                        <img src={logoOrcamentos} alt="" />
                    </div>

                    <p> 0 </p>
                </article>

                <article>
                    <div>
                        <p>Aprovados</p>
                        <img src={logoAprovados} alt=" Logo de projetos aprovados" />
                    </div>
                    <p> 0 </p>
                </article>

                <article>
                    <div>
                        <p>Pendentes</p>
                        <img src={logoPendentes} alt=" Logo de projetos pendentes" />
                    </div>
                    <p> 0 </p>
                </article>

                <article>
                    <div>
                        <p>Valor total aprovado</p>
                        <img src={logoEstatisticas} alt="Logo de valor total de orçamentos aprovados" />
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

        </main>
    )
}