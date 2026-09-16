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
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    padding: 48px;
`

export const Email = styled.p`
    text-align: left;
    font-size: 20px;
    margin-top: 12px;
`

export const Img = styled.img`
    width: 100px;
    background-color: #1763cf;
    padding: 12px;
    border-radius: 10px;
    margin-bottom: 20px;
`

export const Title = styled.h1`
    color: #555;
    font-size: 30px;
`


export const Paragrafo = styled.p`
    font-size: 20px;
    
`

export const Input = styled.input`
    width: 400px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-bottom: 12px;
    background-color: #eee;
`