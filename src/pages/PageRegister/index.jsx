import Button from '../../components/button'
import { Img, Title, Paragrafo, Article, Email, Input, Main } from './style'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'

function pageRegister() {
    const navigate = useNavigate()
    return (
        <Main>
            <Article>
                <div>
                    <Img src={logo} alt="Logo Default" />
                    <Title>OrçaPro</Title>
                    <Paragrafo>Crie seu Cadastro</Paragrafo>

                </div>

                <div>
                    <Email> Email </Email>
                    <Input placeholder='seu@email.com'></Input>

                    <Email> Senha </Email>
                    <Input placeholder='Digite sua senha'></Input>

                    <Email> Nome Completo </Email>
                    <Input placeholder='Digite seu nome completo'></Input>

                    <Email> Nome da Empresa </Email>
                    <Input placeholder='Sua Empresa LTDA'></Input>

                </div>

                <Button>Criar Cadastro</Button>
                <Button onClick={() => navigate('/home')}>Voltar</Button>

                <div>

                </div>
            </Article>
        </Main>

    )
}

export default pageRegister