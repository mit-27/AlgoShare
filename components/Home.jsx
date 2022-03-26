import { Box, Flex, Heading, Text, Button, Container,Center } from '@chakra-ui/react';
import Image from 'next/image'
import mainImage from '../utils/images/main_3_img.png'
import Link from 'next/link'
const Home = () => {
  return (
    <Box as="section" pt={20} pb={24}>
            {/* <Container> */}
              <Box maxW="xl" mx="auto" textAlign="center">
                  <Image src={mainImage} alt="Main image src" className='homeImg' layout='responsive'  />
                <Heading mt={5} as="h1" w='full' size="xl" fontWeight="black">
                  A Platform for all the coding Problems.
                </Heading>

                <Text opacity="0.7" fontSize="lg" mt="6">
                  AlgoShare is a platform to ask and answer different coding questions. User can post Coding question and other users can answer via submitting code.
                </Text>

               

                <Box mt="6">
                  <Link href="/" passHref>
                      <Button size="lg" as="a" colorScheme="teal">
                          Let's Get Started
                      </Button>
                  </Link>
              </Box>
              </Box>
            {/* </Container> */}
    </Box>
  )
}

export default Home