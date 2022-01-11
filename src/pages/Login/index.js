import { Header } from "../../components/Header";
import { Container,
         Form} from "./styled"; 

import InputField from "../../components/InputField";

function Login() {

    return( 
        <Container>
            <Header/>

            <h1>LOGIN</h1>

            <Form>
                <InputField name="User" ></InputField>
                <InputField name="Password" ></InputField>
                <button>login</button>
            </Form>

            

        </Container>
    );

}

export default Login