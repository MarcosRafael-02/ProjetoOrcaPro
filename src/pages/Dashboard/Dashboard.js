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

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
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
    border: 1px solid #ddd;
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