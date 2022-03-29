import { ChakraProvider, ColorModeProvider, CSSReset, ThemeProvider, extendTheme } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/Home.css'


const Mytheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider theme={Mytheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  )
}

export default MyApp
