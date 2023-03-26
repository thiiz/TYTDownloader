'use client'

import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #35363a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 1.3rem;
    row-gap: .5rem;
    & #copyright{
        font-size: 1.3rem;
    }
    & #dev{
        font-size: 1.1rem;
    }
    & a{
        color: #fff;
    }
`

export { FooterContainer }