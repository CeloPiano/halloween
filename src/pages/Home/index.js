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

                <Title>
                    
                    SPOOKY PARTY
                
                </Title>

                <img src={abobora} className="abobora"/> 

                <p> A festa de halloween mais bacana que voçê já viu, agora em Brasília</p>
                <Button Name="Get SPOOKED"/>
            </Content>


        </Container>
    );

}

export default Home;