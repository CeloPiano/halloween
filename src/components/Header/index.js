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
                <Link to="/" className="Button">BUY</Link>
                <Link to="/" className="Button">SIGN UP</Link>
                <Link to="/" className="Button">ABOUT US</Link>
            </Navbar>

        </Container>
    );

}