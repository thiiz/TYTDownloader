import Form from './components/form'
import Title from './components/title'
import { Main } from '@/styles/styledPage'
import Faq from './components/faq'

export default function Home() {
    return (
        <Main>
            <Title />
            <Form />
            <Faq />
        </Main>
    )
}
