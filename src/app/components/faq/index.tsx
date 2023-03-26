import { FaqContainer } from "./style"

export default function Faq() {
    return (
        <FaqContainer>
            <h1>FAQ of TYTDownloader</h1>
            <ol>
                <li>
                    <strong>Limita o número de arquivos que converto?</strong>
                    <span>Não, não limitamos. É livre de converter os vídeos do YouTube em MP3 quantos quiser. Mais tarde, algumas partilhas no Facebook, Twitter ou outras podem ser necessárias para que mais pessoas saibam sobre o TYTDownloader.</span>
                </li>
                <li>
                    <strong>Que formatos áudio/vídeo suporta?</strong>
                    <span>O TYTDownloader suporta a conversão para MP3 e MP4. Os áudios MP3 e os vídeos MP4 são universalmente reproduzidos em qualquer dispositivo.</span>
                </li>
                <li>
                    <strong>Pode converter vídeos online com proteção de direitos autorais para MP3/MP4?</strong>
                    <span>Não, nós não apoiamos. O TYTDownloader suporta apenas a conversão de vídeos online para MP3/MP4 para uso pessoal.</span>
                </li>
                <li>
                    <strong>O seu serviço está disponível em smartphones ou tablets?</strong>
                    <span>Sim, está disponível. Os nossos serviços estão acessíveis em quaisquer smartphones e tablets, Android, iOS e outros.</span>
                </li>
                <li>
                    <strong>Onde é salvo o arquivo de download?</strong>
                    <span>O arquivo baixado é salvo na pasta de download padrão do seu navegador web.</span>
                </li>
                <li>
                    <strong>Quantos arquivos posso converter ao mesmo tempo?</strong>
                    <span>Quantos quiser. Abra o TYTDownloader em vários guias do navegador. Cole um endereço de vídeo em um guia e clique em "CONVERTE"; cole outro endereço no segundo guia e clique em "CONVERTE"; cole um terceiro...</span>
                </li>
            </ol>
        </FaqContainer>
    )

}