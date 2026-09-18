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

export const Img = styled.img`
    width: 30px;
`