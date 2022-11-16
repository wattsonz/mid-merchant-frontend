import styled from 'styled-components'

type Props = {}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  `

export default function manage({ }: Props) {
    return (
        <Div>manage</Div>
    )
}