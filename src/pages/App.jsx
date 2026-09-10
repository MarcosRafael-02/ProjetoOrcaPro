import { Article, Img, Title, Paragrafo, Email, Input, Button, Main } from '../styles/styles'
import logo from '../assets/logo.png'

function App() {
  return (
    <Main>

      <Article>

        <div>
          <Img src={logo} alt="Logo da página de login" />
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
          <Paragrafo> Não tem conta? <a href="#"> Cadastre-se</a> </Paragrafo>
        </div>

      </Article>

    </Main>
  )
}

export default App
