import {useColorMode, Box, Badge, Text, Flex, Stack} from '@chakra-ui/react';
import {useRouter} from 'next/router'

const QuestionCard = ({question,plaformName}) => {

    const router = useRouter()

    const onQuestion = () => {
        router.push({pathname:'/problems/[id]',query:{id:322332}})
    }


    return (
    <Box
            borderWidth="1px"
            borderRadius={8}
            p={1}
            mb={2}
            backgroundColor="gray.800"
        >
            <Flex>
                <Stack ml={3} mt={2} mb={2} w="100%" pr={4}>
                    <Flex align="center" justify="space-between">
                        <Text fontSize="2xl" _hover={{color:'skyblue'}} onClick={() => onQuestion()} cursor='pointer' fontWeight="semibold" lineHeight="short">
                            {question}
                        </Text>
                        
                    </Flex>

                    <Flex align='baseline' justify='flex-start'>
                        <Badge fontSize='md' variant='subtle'>Answers : 30</Badge>
                    </Flex>

                    <Flex align="left" justify='flex-start'  py={2} >
                        <Badge cursor='default' colorScheme='teal' mr={1}>{plaformName}</Badge>
                        <Badge cursor='default' colorScheme='green' mr={1}>{plaformName}</Badge>
                        <Badge cursor='default' colorScheme='purple' mr={1}>{plaformName}</Badge>
                    </Flex>

                    <Flex align='baseline' justify='flex-end'>
                        <Badge cursor='default' fontSize='sm' variant='subtle'> - Mit Suthar</Badge>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
  )
}

export default QuestionCard