import styled from 'styled-components'

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