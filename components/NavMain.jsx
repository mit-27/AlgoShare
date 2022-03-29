import {Box, Flex, Heading, Text, Button,IconButton,Menu,MenuList,MenuItem,MenuButton,Input,InputGroup,InputLeftElement,Icon,Drawer,DrawerBody,DrawerOverlay, DrawerContent,useDisclosure,DrawerCloseButton} from '@chakra-ui/react';
import Link from 'next/link'
import {HamburgerIcon} from '@chakra-ui/icons'
import {SearchIcon} from '@chakra-ui/icons'
import {useState, useEffect, useRef} from 'react';
import SideNav from './SideNav';
import {useUser} from '@auth0/nextjs-auth0'


const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);
    

    const downHandler = ({key}) => {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    };

    const upHandler = ({key}) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []);

    return keyPressed;
};



const NavMain = () => {
    
    const [search,SetSearch] = useState("")
    const inputRef = useRef();
    const slashPress = useKeyPress('/');
    const {isOpen, onToggle, onClose} = useDisclosure();
    const {user} = useUser()

    if (slashPress) {
        inputRef.current.focus();
    }

    const onSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.value;
        const valueWithoutSlash = searchValue.replace('/', '');

        SetSearch(valueWithoutSlash);
    }

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
                <InputGroup display={['none',  'block']} width="100%" ml={16} mr={16}>
                        <InputLeftElement children={<SearchIcon  color="gray.500" />} />
                        <Input
                            type="text"
                            onChange={onSearch}
                            value={search}
                            ref={inputRef}
                            autoFocus={slashPress}
                            placeholder={`Search for Questions (Press "/" to focus)`}
                            bg="gray.700"
                        />
                </InputGroup>

                <Flex align="center" display={['none','block']} >
                    <Link href={user? "/api/auth/logout" : "/api/auth/login"}><Button as="a" variant='outline' colorScheme='teal'>{user ? "Logout" : "Login"}</Button></Link>
                </Flex>


                <Flex align='center' display={['block','none']}>
                    <IconButton
                        aria-label="Navigation Menu"
                        fontSize="20px"
                        variant="ghost"
                        display={{sm: 'inline-flex', md: 'inline-flex'}}
                        color="gray.500"
                        icon={<HamburgerIcon/>}
                        onClick={onToggle}
                    />
                    <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody p={0}>
                                <SideNav closedrawer={onClose}  />
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    {/* <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem  command='⌘T'>
                            New Tab
                            </MenuItem>
                            <MenuItem  command='⌘N'>
                            New Window
                            </MenuItem>
                            
                        </MenuList>
                    </Menu> */}
                </Flex>
            </Flex>
        </Box>




    </Box>
  )
}

export default NavMain