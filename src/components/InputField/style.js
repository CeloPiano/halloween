import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    width: 15rem;

    input:placeholder-shown + label {
        opacity: 0;
    }


`


export const Input = styled.input`
    padding: 0.5rem 0.5rem;
    border-radius: 0.7rem;


    border: 0.1rem solid gray; 

`

export const Placeholder = styled.label`
    transform: translateY(-3.8rem);

    transition: all 0.5s;
`