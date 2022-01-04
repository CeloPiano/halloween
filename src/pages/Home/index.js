import { Header } from "../../components/Header";
import { Container,
         Content,
         Title
          } from "./styled";

import { Button } from "../../components/Button";

import abobora from "../../assets/abobora.png"
import InputField from "../../components/InputField";

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

            <InputField name="Nome"></InputField>

        </Container>
    );

}

export default Home;