import { Box, Flex, Heading, Text, Button, Container } from '@chakra-ui/react';
import NavMain from './NavMain';
import SideNav from './SideNav';
const Layout = ({children,...rest}) => {
    return (
        <>
            <NavMain />
            <Box>
                <SideNav display={['none', null, 'block']} maxWidth="18rem" width="full" />
                <Box pl={[0, null, '18rem']} mt="4rem">
                    <Box
                        as="section"
                        backgroundColor="gray.900"
                        minHeight="calc(100vh - 4rem)"
                    >
                        <Box {...rest}>{children}</Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Layout