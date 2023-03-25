import { FooterContainer } from "./style";
import { roboto } from "@/fonts";
export default function Footer() {
    return (
        <FooterContainer style={roboto.style}>
            <span>&copy; 2023 TYTDownloader. Todos os direitos reservados.</span>
            <span>Desenvolvido por <a target="_blank" href="https://twitter.com/1ziht">thiz</a></span>
        </FooterContainer>
    )
}