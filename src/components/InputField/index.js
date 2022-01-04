import {Container, Input, Placeholder } from "./style";


function InputField({tipo,name}) {

    return(
        <Container>

            <Input type={tipo} placeholder={name}></Input>
            <Placeholder>{name}</Placeholder>

        </Container>
    );

}

export default InputField 