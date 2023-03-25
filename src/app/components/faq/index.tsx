import { FaqContainer } from "./style"
import { roboto } from "@/fonts"
export default function Faq() {
    return (
        <FaqContainer style={roboto.style}>
            <h1>FAQ of TYTDownloader</h1>
            <ol>
                <li>
                    <strong>Limita o número de ficheiros que converto?</strong><br />
                    Não, não limitamos. É livre de converter o YouTube em MP3 quantas quiser. Mais tarde, algumas partilhas no Facebook, Twitter ou outras podem ser necessárias para que mais pessoas saibam sobre o TYTDownloader.
                </li>
                <li>
                    <strong>Que formatos áudio/vídeo suporta?</strong><br />
                    O TYTDownloader suporta a conversão para MP3 e MP4. Os áudios MP3 e os vídeos MP4 são universalmente reproduzidos em qualquer dispositivo.
                </li>
                <li>
                    <strong>Pode converter vídeos online com proteção de direitos autorais para MP3/MP4?</strong><br />
                    Não, nós não apoiamos. O TYTDownloader suporta apenas a conversão de vídeos online para MP3/MP4 para uso pessoal.
                </li>
                <li>
                    <strong>O seu serviço está disponível em smartphone ou tablet?</strong><br />
                    Sim, é um pouco. Os nossos serviços estão disponíveis em quaisquer tablets e telemóveis, Android, iOS e outros.
                </li>
                <li>
                    <strong>Onde é guardado o ficheiro de descarregamento?</strong><br />
                    O ficheiro descarregado é guardado na pasta de descarregamento padrão do seu navegador web.
                </li>
                <li>
                    <strong>Quantos ficheiros posso converter ao mesmo tempo?</strong><br />
                    Quantos quiser. Abra o TYTDownloader em vários separadores. Cole um endereço de vídeo em um separador e clique em "CONVERTE"; cole outro endereço no segundo separador e clique em "CONVERTE"; cole um terceiro...
                </li>
            </ol>
        </FaqContainer>
    )

}