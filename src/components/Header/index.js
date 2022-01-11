import { Container,
         Logo,
        Navbar } from "./style";

import morcegao from "../../assets/morcego.png";

import { Link } from "react-router-dom";

export function Header () {

    return(
        
        <Container>
            
            <Logo>
                <img src={morcegao} className="Imagem" alt="MORCEGO MALUCO"/>
                <Link to="/" className="Title" >SPOOKY PARTY</Link>
            </Logo>

            <Navbar>
                <Link to="/" className="Button">BUY</Link>
                <Link to="/login" className="Button">SIGN IN</Link>
                <Link to="/" className="Button">PROFILE</Link>
                <Link to="/aboutus" className="Button">ABOUT US</Link>
            </Navbar>

        </Container>
    );

}