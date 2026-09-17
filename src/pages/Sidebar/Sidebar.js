import styled from 'styled-components'


export const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 20px;
    background-color: #ccc;
    width: 250px;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    img{
        background-color: #1763cf;
        padding: 10px;
        border-radius: 16px;
    }
`

export const Img = styled.img`
    width: 60px;
    margin-right: 20px;
`

export const ContainerSair = styled.div`
    display: flex;
    align-items: center;
    margin-top: auto;
    padding: 20px;

    button{
        font-size: 22px;
        border: none;
        background-color: transparent;
        margin-left: 20px;
        cursor: pointer;
    }

    img{
        width: 30px;
    }
`

export const ItemMenu = styled.div`
    display: flex;
    font-size: 20px;
    margin-bottom: 20px;
    align-items: center;

    img{
        width: 30px;
        margin-right: 22px;
    }
`

export const Title = styled.h1`
    font-size: 24px;
`