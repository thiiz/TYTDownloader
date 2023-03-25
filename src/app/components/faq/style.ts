'use client'

import styled from "styled-components";

const FaqContainer = styled.div`
    width: 63%;
    font-size: 1.7rem;
    padding-bottom: 15rem;
    margin-top: 10rem;
    & li:first-child{
        margin-top: 1rem;
    } 
    & li:not(:first-child){
        margin-top: 1.6rem;
    }
`

export { FaqContainer }