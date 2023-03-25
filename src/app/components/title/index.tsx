import { TitleContainer } from './style'
import { montserrat } from '@/fonts'
export default function Title() {
    return (
        <TitleContainer>
            <h1 style={montserrat.style}><span id='first'>TYT</span><span id='second'>Downloader</span></h1>
        </TitleContainer>
    )
}