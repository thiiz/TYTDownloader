import styled from 'styled-components'


const FormContainer = styled.form`
        display: flex;
        justify-content: center;
        position: relative;
    & {
        .input-group {
        display: flex;
        align-items: center;
        width: 50vw;
    }

    .input {
        min-height: 50px;
        min-width: 100%;
        padding: 0 1rem;
        color: #fff;
        font-size: 1.5rem;
        border: 1px solid #153B44;
        border-radius: 6px 0 0 6px;
        background-color: transparent;
        padding-right: 8.5rem;
        transition: 150ms ease;
    }

    .button--submit {
        position: absolute;
        right: 0;
        min-height: 63px;
        padding-inline: .9em;
        border: none;
        border-radius: 0 5px 5px 0;
        background-color: #2D6E7E;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        transition: background-color .3s ease-in-out;
    }

    .button--submit:hover {
        background-color: #2D6E7E;
    }

    .input:focus, .input:focus-visible {
        border-color: #2D6E7E;
        outline: none;
    }

}
`

export { FormContainer }