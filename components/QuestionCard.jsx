import {useColorMode, Box, Badge, Text, Flex, Stack} from '@chakra-ui/react';
import {useRouter} from 'next/router'

const badgeColors = {
    LEETCODE: 'yellow',
    HACKERRANK: 'blue',
    CODEFORCE: 'red',
    CODECHEF: 'orange',
    INTERVIEWBIT:'teal'
};


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

                    <Flex wrap='wrap' align="left" justify='flex-start'  py={2} >
                        <Badge cursor='default' colorScheme={badgeColors[plaformName]} m={1}>{plaformName}</Badge>
                        <Badge cursor='default' colorScheme={badgeColors[plaformName]} m={1}>{plaformName}</Badge>
                        <Badge cursor='default' colorScheme={badgeColors[plaformName]} m={1}>{plaformName}</Badge>
                    </Flex>

                    <Flex align='baseline' justify='flex-start'>
                        <Text color='gray.300'> - Mit Suthar</Text>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
  )
}

export default QuestionCard