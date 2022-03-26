import { ChakraProvider, ColorModeProvider, CSSReset, ThemeProvider, extendTheme } from '@chakra-ui/react'
import '../styles/Home.css'


const Mytheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Mytheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
