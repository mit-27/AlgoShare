import {Box, Flex, Heading, Text, Button,IconButton,Menu,MenuList,MenuItem,MenuButton} from '@chakra-ui/react';
import Link from 'next/link'
import {HamburgerIcon} from '@chakra-ui/icons'

const NavDefault = () => {
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
                    <Button  variant="ghost" mr={2}>
                        {'Sign In'}
                    </Button>
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
                            <MenuItem  command='⌘T'>
                            Sign in
                            </MenuItem>
                            <MenuItem  command='⌘N'>
                            Dashboard
                            </MenuItem>
                            
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>




    </Box>
  )
}

export default NavDefault