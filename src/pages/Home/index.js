import { Header } from "../../components/Header";
import { Container,
         Content,
         Title
          } from "./styled";

import { Button } from "../../components/Button";

import abobora from "../../assets/abobora.png"
import esqueleto from "../../assets/esqueleto.png"
import gato from "../../assets/gato.png"
import mumia from "../../assets/mumia.png"
import zombie from "../../assets/zombie.png"

function Home() {

    return(
        
        <Container>
            <Header/>

            
            
            <Content>
                <Title>SPOOKY <img src={abobora} className="abobora"/> PARTY</Title>
                <p> A festa de halloween mais escrota que voçê já viu, agora em Brasília</p>
                <Button/>
            </Content>


        </Container>
    );

}

export default Home;