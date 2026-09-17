import styled from 'styled-components'

export const Main = styled.main`


    section{
        display: flex;
        justify-content: space-between;
        font-size: 24px;

        a{
            text-decoration: none;
            
        }
    }
`


export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #777;
    border-radius: 30px;

    div{
        
        p{
            font-size: 22px;
        }
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #bbb;
    padding: 5px;
    border-radius: 12px;
    
    img{
        width: 20px;
        margin-right: 10px;
    }
    
    input{
        border: none;
    }
    
    input:focus{
        outline: none;
    }
    
    `

export const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const h1 = styled.h1``

export const Img = styled.img`
    width: 30px;
`


export const Article = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;
    font-size: 22px;
    border: 2px solid #ccc;
    padding: 20px;
    border-radius: 14px;
    width:400px;
`

export const A = styled.a``