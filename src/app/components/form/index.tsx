'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { FormContainer } from "./style";

type Inputs = {
    link: string,
};

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("link"))

    return (
        <FormContainer className="form">
            <div className="input-group">
                <input type="text" className="input" placeholder="Place music name or link" autoComplete="off" />
                <input className="button--submit" value="Search" type="submit" />
            </div>
        </FormContainer>
    );
}