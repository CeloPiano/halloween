
import { Container,
        Profile,
        Quadro,
        Img,
        P } from "./styled";

import { Header } from "../../components/Header";

import celo from "../../assets/nofear.jpg"
import bigu from "../../assets/gigu.png"

function AboutUs() {
    const text = "Quando você encontra alguém especial e se apaixona por essa pessoa, você começa a construir um relacionamento com os cuidados de quem constrói uma Maravilha.Seus materiais básicos são constituídos de muito Amor, Companheirismo e Dedicação.Até que um dia algo terrível acontece, jogando por terra toda sua construção.É desalentador e faz mesmo pensar que todo seu trabalho fora em vão.Mas isso é ledo engano: se construistes tudo realmente com beleza e pureza de sentimento, restará ainda uma magnífica Amizade.Assim como as mais majestosas construções da Humanidade deixaram suntuosas ruinas das quais cuidamos e admiramos, a Amizade fruto de um Amor de verdade, deve e merece ser preservada."

    return(

        <Container>        
            <Header/>
            
            <P>About US</P>

            <Quadro>
                <Img src={celo}/>    
                
                <Profile>
                    <h1>Marcelo Piano</h1>
                    <p>{text}</p>
                </Profile>

            </Quadro>

            <Quadro>
                <Img src={bigu}/>    
                
                <Profile>
                    <h1>Vinicius BUGU</h1>
                    <p>{text}</p>
                </Profile>

            </Quadro>

        </Container>
    );
    
}

export default AboutUs