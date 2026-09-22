import HeaderDefault from '../../components/Header/header'
import Button from '../../components/button'
import { Section, Div, Main } from './Orcamentos'
import logoPesquisar from '../../assets/pesquisar.png'

function Orcamentos() {
    return (
        <Main>
            <HeaderDefault
                titulo="Orçamento"
                subtitulo="0 orçamentos encontrados"
            />

            <Section>
                <Div>
                    <img src={logoPesquisar} alt="logo pesquisar do input" />
                    <input type="text"
                        placeholder='Buscar por projeto ou cliente...' />
                </Div>
            </Section>

            <section>
                <article>
                    <img src={logoPesquisar} alt="" />
                    <p>Nnehum orçamento encontrado</p>
                    <p>Crie seu primeiro orçamento</p>
                    <Button>+ Criar Orçamento</Button>
                </article>

            </section>
        </Main >
    )
}

export default Orcamentos