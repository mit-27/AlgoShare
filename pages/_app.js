import { ChakraProvider, ColorModeProvider, CSSReset, ThemeProvider, extendTheme } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/Home.css'
import { ProvideSearch } from '../utils/search'


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
        <ProvideSearch>
          <Component {...pageProps} />
        </ProvideSearch>
      </ChakraProvider>
    </UserProvider>
  )
}

export default MyApp
