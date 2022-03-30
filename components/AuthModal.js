
import React from 'react'
import { Modal, ModalBody, ModalOverlay, ModalContent, Flex, useDisclosure, Button, Text, ModalCloseButton, Stack, ModalHeader } from '@chakra-ui/react'
import Link from 'next/link'

export const withAuthModal = (Component) => (props) => {


    const { isOpen, onOpen, onClose } = useDisclosure();



    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} width="25rem">
                <ModalOverlay />
                <ModalContent borderRadius={4}>
                    <ModalCloseButton />
                    <ModalHeader>Authenticate</ModalHeader>
                    <ModalBody p={5}>
                        <Flex align="center" justify="center">
                            <Stack spacing={3}>
                                <Text>You cannot access this feature without login. </Text>
                                <Link passHref href='/api/auth/login' ><Button as='a' colorScheme='teal'>Login</Button></Link>
                            </Stack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Component openAuthModal={onOpen} {...props} />
        </>
    );
};



// export default withAuthModal