import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components'

import NavBar from '../components/NavBar'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* color-scheme: dark; */
}

body {
  /* background-color: black; */
  min-height: 100vh;
  /* font-family: 'Comfortaa', cursive;   */
  -webkit-tap-highlight-color: transparent;
}
`

const Container = styled.div`
  min-height: 101vh;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <NavBar />
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
