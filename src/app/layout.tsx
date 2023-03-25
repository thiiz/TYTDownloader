import StyledComponentsRegistry from '../lib/registry';
import Footer from './components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>TYTDownloader - Download YT to MP3</title>
        <meta name="description" content="O TYTDownloader é um site que permite baixar músicas do YouTube e convertê-las em arquivos MP3 de alta qualidade. Experimente agora mesmo e tenha todas as suas músicas preferidas disponíveis offline!" />
        <meta name="keywords" content="baixar música do YouTube, converter YouTube para MP3, TYTDownloader, baixar MP3 do YouTube, baixar música grátis, baixar música online, ferramenta de conversão de MP3, como baixar música do YouTube, música offline, alta qualidade de áudio" />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}