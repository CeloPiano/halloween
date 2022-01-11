import {Container, Input, Placeholder } from "./style";


function InputField({type,name}) {

    return(
        <Container>

            <Input type={type} placeholder={name}></Input>
            <Placeholder>{name}</Placeholder>

        </Container>
    );

}

export default InputField 