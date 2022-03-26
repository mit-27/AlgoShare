import { Box, Flex, Heading, Text, Button, Container } from '@chakra-ui/react';


const Footer = () => {
  return (
    <Box
    left="0"
    right="0"
    bottom="0"
    w='full'
    textAlign="center"
    backgroundColor='gray.800'
    height="4rem"
    zIndex="200"
    as="header"
    borderTopWidth="1px"
    >
        <Heading size='md' py={3}>Copyright &#169; : 2022 AlgoShare</Heading>

    </Box>
  )
}

export default Footer