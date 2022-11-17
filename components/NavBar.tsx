import Link from 'next/link'
import styled from 'styled-components'

type Props = {}

const Div = styled.div`
    display: flex;
    background-color: #1382e4;

    h1 {
        display: inline;
        padding-left: 100px;
    }

    p {
        cursor: pointer;
    }

    p:hover {
        color: #00c8ff;
    }
    `

export default function NavBar({ }: Props) {
    return (
        <Div>
            <h1><Link href="/"><p>Home</p></Link></h1>
            <h1><Link href="/manage"><p>Manage</p></Link></h1>
        </Div>
    )
}