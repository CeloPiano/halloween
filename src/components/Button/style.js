import styled from "styled-components";

import { COLORS } from "../../constants/colors";

export const Container = styled.button`

    width: 10rem;
    height: 3.5rem;


    border: 0.1rem solid ${COLORS.black};
    border-radius: 0.4rem;

    background: ${COLORS.bluebackground};

    color: ${COLORS.black};
    font-size: 1rem;

    cursor: pointer;

    transition: all 1s ease;

    &:hover {
        background: ${COLORS.black};
        color: white;
        font-size: 1.9rem;
    }

`
