import styled from 'styled-components'

export const Main = styled.main`

    section{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40vh;
        text-align: center;
        border: 1px solid #ccc;
        margin: 20px;
        border-radius: 10px;

        img{
            width: 40px;
            background-color: #ddd;
            padding: 6px;
            border-radius: 50%;
        }

        button{
            width: max-content;
        }
        
        p{
            font-size: 18px;
            margin-top: 10px;
        }
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 20px 0 ;

    img{
        width: 20px;
        margin-right: 10px;
    }

    input{
        border: none;
        width: 400px;
    }

    input:focus{
        outline: none;
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 10px;
`