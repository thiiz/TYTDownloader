import { Roboto } from 'next/font/google'
import Form from './components/form'
import Title from './components/title'
import { Main } from '@/styles/styledPage'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

export default function Home() {
    return (
        <Main style={roboto.style}>
            <Title />
            <Form />
        </Main>
    )
}
