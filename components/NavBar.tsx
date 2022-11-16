import styled from 'styled-components'

type Props = {}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1382e4;
    `

export default function NavBar({ }: Props) {
    return (
        <Div>
            <h1>NarBar</h1>
        </Div>
    )
}