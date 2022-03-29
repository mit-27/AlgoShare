import {Box, Flex, Heading, Text, Button,IconButton,Menu,MenuList,MenuItem,MenuButton} from '@chakra-ui/react';
import Link from 'next/link'
import {HamburgerIcon} from '@chakra-ui/icons'
import {useUser} from '@auth0/nextjs-auth0'

const NavDefault = () => {

    const {user} = useUser()




  return (
    <Box
    pos='fixed'
    as='header'
    top="0"
    zIndex="200"
    backgroundColor='gray.800'
    // bg={bg[colorMode]}
    left="0"
    right="0"
    borderBottomWidth="1px"
    width="full"
    height="4rem"
    >

        <Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
            <Flex size="100%" p={[2, 3]} pl={[0, 4]} align="center" justify="space-between">
                <Box as="a"  d="block" href="/" aria-label="Algoshare, Back to homepage">
                    <Heading  size='md' color='skyblue'>AlgoShare</Heading>
                </Box>
                <Flex align="center" display={['none','block']} >
                    <Link href={user? "/api/auth/logout" : "/api/auth/login"} passHref > 
                        <Button as='a'  variant="ghost" mr={2}>
                            {user? 'Logout' : 'Login'}
                        </Button>
                    </Link>
                    <Link href="/problems" passHref>
                        <Button as="a" >{'Problems'}</Button>
                    </Link>
                </Flex>
                <Flex align='center' display={['block','none']}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <Link href={user? "/api/auth/logout" : "/api/auth/login"} passHref>
                                <MenuItem as='a'  >
                                {user? 'Logout' : 'Login'}
                                </MenuItem>
                            </Link>
                            <Link href="/problems" passHref>
                                <MenuItem as='a'  >
                                Problems
                                </MenuItem>
                            </Link>
                            
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>




    </Box>
  )
}

export default NavDefault