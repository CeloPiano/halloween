import styled from "styled-components";

export const Container = styled.div` 

    display: flex;

    flex-direction: column;
    
    align-items: center;

    flex-wrap: wrap;

    gap: 5rem;

    @keyframes twist{
        0%{
            transform: rotate(0deg);
        }

        50%{
            transform: rotate(-15deg);
        }

        100%{
            transform: rotate(0deg);
        }
    }

    .abobora{
        animation: twist 2s ease infinite;

        width: 25rem;
    }
`

export const Content = styled.div`
    

    width: 50%;
    
    display: flex;
    
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    h1{
        text-align: center;
        font-size: 5rem;
    }

    p{
        font-size: 2rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    
`

export const Title = styled.h1`
    word-spacing: 7rem;
`