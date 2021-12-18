import styled from "styled-components";

import { COLORS } from "../../constants/colors";

export const Container = styled.button`

    width: 10rem;
    height: 3.5rem;

    border-radius: 0.4rem;

    background-color: ${COLORS.black};

    color: white;
    font-size: 0.85rem;

    cursor: pointer;

    transition: opacity 1s;

    &:hover {
        opacity: 0.8;
    }

`
