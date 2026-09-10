import styled from "styled-components";

export const Main = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
`

export const Article = styled.article`
    width: 100%;
    max-width: 500px;
    padding: 48px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    background-color: white;
`

export const Img = styled.img`
    width: 100px;
    background-color: #1763cf;
    padding: 12px;
    border-radius: 16px;
    margin-bottom: 20px;
`

export const Title = styled.h1`
    color: #555;
    font-size: 30px;
`

export const Paragrafo = styled.p`
    font-size: 20px;

    a{
        text-decoration: none;
        color: #1763cf;
    }
`

export const Email = styled.p`
    text-align: left;
    font-size: 20px;
    margin-top: 20px;
`

export const Input = styled.input`
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 400px;
    margin-bottom: 10px;
    background-color: #eee;
`

export const Button = styled.button`
    background-color: #1763cf;
    border: none;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    width: 400px;
    margin: 16px 0;
    cursor: pointer;
    color: white;

    &:hover{
        opacity: .8;
    }

    &:active{
        opacity: .7;
    }
`



