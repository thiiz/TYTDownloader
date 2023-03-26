'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { FormContainer } from "./style";
import { youtube_parser } from "@/utils/parser";
import axios from "axios";
import { useState } from "react"

type Inputs = {
    link: string,
};

export default function Form() {
    const [urlResult, setUrlResult] = useState(null);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => search(data.link as any);


    const search = (address: any) => {
        const options = {
            method: 'GET',
            url: 'https://youtube-mp3-download1.p.rapidapi.com/dl',
            params: { id: address },
            headers: {
                'X-RapidAPI-Key': 'ab0746d390msh64cbcfe03f3f853p1d1872jsn520e5440f4dc',
                'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setUrlResult(response.data.link)
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
                <input  {...register("link", { required: true })} type="text" className="input" placeholder="Place music name or link" autoComplete="off" />
                <input className="button--submit" value="Search" type='submit' />
                {/* {errors.link && <span className="error">This field is required</span>} */}
                {urlResult && <iframe src="https://api.vevioz.com/api/button/mp3/5tpP6UCd3m0" width="100%" height="100%" allowTransparency={true} style={{ border: "none" }}></iframe>}

            </div>
        </FormContainer>
    );
}
