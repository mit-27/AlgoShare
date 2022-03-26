import { Box, Flex, Heading, Text, Button, Container,Center,SimpleGrid,GridItem,Icon, VStack } from '@chakra-ui/react';
import {IoIosChatbubbles} from 'react-icons/io'
import {FaShareSquare} from 'react-icons/fa'
import {MdManageSearch} from 'react-icons/md'

const Features = () => {
  return (
    <Box  as="section" >
        
        <Box maxW='3xl' mx='auto' mb={10} alignItems='center' textAlign='center'>
        <Heading mt={5} as="h1" w='full' size="2xl" fontWeight="black" color='teal.200'>Features</Heading>

            <SimpleGrid columns={[1,1,3]} mt={5} py={5}  spacing={7}>
                <GridItem py={5} colSpan='1' alignSelf='center' mx='auto' maxW='250' minH='300' bgColor='yellow.500' scale='1' _hover = { { transform: "scale(1.1)",transition:'all .3s ease-in-out' } } borderRadius='md'>
                    <VStack  px={5} py={8} alignItems='flex-start' textAlign='left'>
                        <Icon  w={8}  color='white' h={8} as={IoIosChatbubbles}/>
                        <Text  fontSize="md" mt="6">
                        Create a community to help each other with coding problems. Add solution for asked coding question and also ask your doubts related to it.
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem py={5} colSpan='1' alignSelf='center' mx='auto' maxW='250' minH='300' _hover = { { transform: "scale(1.1)",transition:'all .3s ease-in-out' } } colSpan='1' bgColor='purple.500' borderRadius='md'>
                    <VStack p={7} alignItems='flex-start' textAlign='left'>
                        <Icon  w={8}  color='white' h={8} as={FaShareSquare}/>
                        <Text  fontSize="md" mt="6">
                            Share your learning with others by adding source code for asked coding problems.
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem py={5} colSpan='1' alignSelf='center' mx='auto' maxW='250' minH='300' _hover = { { transform: "scale(1.1)",transition:'all .3s ease-in-out' } } colSpan='1' bgColor='pink.400' borderRadius='md'>
                    <VStack p={7} alignItems='flex-start' textAlign='left'>
                        <Icon  w={8}  color='white' h={8} as={MdManageSearch}/>
                        <Text  fontSize="md" mt="6">
                            Easily search for coding problems and also filter out those based on which platform they are from.
                        </Text>
                    </VStack>
                </GridItem>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Features