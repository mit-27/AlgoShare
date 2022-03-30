import { Box, Flex, Heading, Text, Button, Container } from '@chakra-ui/react';
import Navbar from '../components/NavDefault'

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <Container pt={40}>
                <Heading>404 | Page not found</Heading>
            </Container>
        </>
    )
}

export default ErrorPage