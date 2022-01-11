import styled from "styled-components";


export const Container = styled.div`

    a{
      color: black;
      text-decoration: none;
    }

    font-size: 1.5rem;

    width: 100%;
    height: 6rem;

    display: flex;
    
    align-items: center;
    justify-content: space-between;

    padding: 0 4rem;
`

export const Logo = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

    img{
        width: 4rem;
        /* animation: slide 2s ease infinite; */
    }
    
    .Title:hover + .Imagem{
        /* animation: slide 2s ease infinite; */
    }

    @keyframes slide{
        0%{
            transform: translateY(0%);
        }

        50%{
            transform: translateY(-10%);
        }

        100%{
            transform: translateY(0%);
        }
    }



`

export const Navbar = styled.div`

    display: flex;
    gap: 3rem;


    .Button{
        
        @keyframes nolie{
            0%{
                transform: rotate(0deg);
            }

            25%{
                transform: rotate(25deg);
            }

            50%{
                transform: rotate(0deg);
            }

            75%{
                transform: rotate(-25deg);
            }

            100%{
                transform: rotate(0deg);
            }
        }

        &:hover{
            animation: nolie 1s ease infinite;
        }
    }
`
