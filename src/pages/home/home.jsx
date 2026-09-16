import { Img, Title, Paragrafo, Article, Email, Input, Main } from './styles'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'

function App() {

  const navigate = useNavigate();

  return (
    <Main>

      <Article>

        <div>
          <Img src={logo} alt="Logo Default" />
          <Title>OrçaPro</Title>
          <Paragrafo>Entre na sua conta</Paragrafo>
        </div>

        <div>
          <Email>Email</Email>
          <Input type='text' placeholder='seu@email.com'></Input>

          <Email>Senha</Email>
          <Input type='text' placeholder='Digite sua senha'></Input>
        </div>

        <Button> Entrar </Button>

        <div>
          <Paragrafo> Não tem conta? <a href="#" onClick={() => navigate('/pagina-de-registro')}> Cadastre-se</a> </Paragrafo>

          <Paragrafo> <a href=""> Redefinir minha Senha </a>  </Paragrafo>
        </div>

      </Article>

    </Main>
  )
}

export default App
