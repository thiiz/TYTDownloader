import { FooterContainer } from "./style";
import { roboto } from "@/fonts";
export default function Footer() {
    return (
        <FooterContainer style={roboto.style}>
            <span id='copyright'>&copy; 2023 TYTDownloader. Todos os direitos reservados.</span>
            <span id='dev'>Desenvolvido por <a target="_blank" href="https://github.com/thiizz">thiz</a></span>
        </FooterContainer>
    )
}