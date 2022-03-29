import { Box, Flex, Heading, Text, Button, Container } from '@chakra-ui/react';
import NavMain from './NavMain';
import SideNav from './SideNav';
import {useSearch} from '../utils/search'


const Layout = ({children,...rest}) => {

    const {search,onSearch} = useSearch()


    return (
        <>
            <NavMain onSearch={onSearch} search={search} />
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