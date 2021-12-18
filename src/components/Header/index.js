import { Container,
         Logo,
        Navbar } from "./style";

import morcegao from "../../assets/morcego.png";

import { Link } from "react-router-dom";

export function Header () {

    return(
        
        <Container>
            
            <Logo>
                <img src={morcegao} alt="MORCEGO MALUCO"/>
                <Link to="/" >SPOOKY PARTY</Link>
            </Logo>

            <Navbar>
                <Link to="/" >BUY</Link>
                <Link to="/" >SIGN UP</Link>
                <Link to="/" >ABOUT US</Link>
            </Navbar>

        </Container>
    );

}