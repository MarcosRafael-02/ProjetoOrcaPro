import styled from 'styled-components'

export const Main = styled.main`

    section{
        display: flex;
        font-size: 24px;
        justify-content: space-between;
        padding: 0 50px ;
        align-items: center;

        a{
            text-decoration: none;
            padding: 10px;
            color: black;
        }
    }
`

export const Section = styled.section`
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    margin: 0 50px;
`

export const Img = styled.img`
    width: 30px;
`

export const Article = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;
    font-size: 22px;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 14px;
    width:400px;
`