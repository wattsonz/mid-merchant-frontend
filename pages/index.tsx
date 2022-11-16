import styled from 'styled-components'

type Props = {}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Home({ }: Props) {
  return (
    <Div>
      <h1>hi it's mid-merchant-frontend</h1>
    </Div>
  )
}