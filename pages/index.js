import { Box, Flex, Heading, Text, Button, Container } from '@chakra-ui/react';
import Navbar from '../components/NavDefault'
import Home from '../components/Home'
import Features from '../components/Features'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Box mt="4rem">
          <Home />
          <Features />
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default index