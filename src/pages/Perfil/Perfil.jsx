import { useState } from "react"

import {
    Main,
    Header,
    Article,
    Container,
    Card,
    Title,
    Form,
    Row,
    InputGroup,
    Label,
    Input,
    UploadArea,
    UploadButton,
    UploadIcon,
    SmallText,
    AddressGroup,
} from './Perfil'

import Button from '../../components/button'

function Perfil() {

    const [logo, setLogo] = useState(null);

    return (
        <Main>
            <Header>
                <h1>Perfil</h1>

                <p>Configure sua empresa</p>
            </Header>

            <div>
                <Article>
                    <div>
                        <Title>Seu Plano</Title>
                        <p>Gratuito</p>
                    </div>

                    <p>Plano Gratuito - 0/2 orçamentos usados</p>

                    <Button>Assinar por R$49,90/mês</Button>
                </Article>

                <Container>
                    <Card>
                        <Title>Dados da Empresa</Title>

                        <Form>
                            <Label>Logo da Empresa</Label>

                            <UploadArea>
                                <UploadIcon>↑</UploadIcon>

                                <div>
                                    <UploadButton htmlFor="logo">
                                        Escolher arquivo
                                    </UploadButton>

                                    <input
                                        id="logo"
                                        type="file"
                                        hidden
                                        accept="image/png, image/jpeg"
                                        onChange={(e) => setLogo(e.target.files[0])}
                                    />

                                    <SmallText>
                                        {logo ? logo.name : "Nenhum arquivo escolhido"}
                                    </SmallText>

                                    <SmallText>PNG, JPG até 2MB</SmallText>
                                </div>
                            </UploadArea>

                            <Row>
                                <InputGroup>
                                    <Label>Nome Completo</Label>
                                    <Input placeholder="Marcos Rafael" />
                                </InputGroup>

                                <InputGroup>
                                    <Label>Nome da Empresa</Label>
                                    <Input placeholder="Marcos Construções" />
                                </InputGroup>
                            </Row>

                            <Row>
                                <InputGroup>
                                    <Label>CNPJ</Label>
                                    <Input placeholder="00.000.000/0001-00" />
                                </InputGroup>

                                <InputGroup>
                                    <Label>Telefone</Label>
                                    <Input placeholder="(19) 99278-3330" />
                                </InputGroup>
                            </Row>

                            <InputGroup>
                                <Label>Email</Label>
                                <Input placeholder="marcosrafael@email.com" />
                            </InputGroup>

                            <AddressGroup>
                                <Label>Endereço</Label>
                                <Input placeholder="Rua, número, cidade - estado" />
                            </AddressGroup>

                            <Button>Salvar</Button>
                        </Form>
                    </Card>
                </Container>

            </div>
        </Main>
    )
}

export default Perfil