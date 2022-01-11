import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    flex-direction: column;

    h1{
        margin: 5rem 0;
        display: flex;
        justify-content: center ;
    }

`

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    
    gap: 1rem;

    align-items: center;
    margin-top: 1rem;

    button{
        
        background-color: orange;
        width: 6rem;
        height: 2rem;
        opacity: 0.85;

        cursor: pointer;

        transition: all 1s ease;
        
        &:hover{
            opacity: 1;
            transform: translateY(-0.5rem);
        }
    }
    
`



