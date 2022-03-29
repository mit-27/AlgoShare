import {useColorMode, Box, Badge, Text, Flex, Stack} from '@chakra-ui/react';
import {useRouter} from 'next/router'

const badgeColors = {
    LEETCODE: 'yellow',
    HACKERRANK: 'blue',
    CODEFORCE: 'red',
    CODECHEF: 'orange',
    INTERVIEWBIT:'teal'
};


const QuestionCard = ({question,platforms,keyItem,answersCount,userName}) => {

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
            key={keyItem}
        >
            <Flex>
                <Stack ml={3} mt={2} mb={2} w="100%" pr={4}>
                    <Flex wrap='wrap' align="left" justify='flex-start'  py={2} >
                        {platforms.map((platform) => <Badge key={platform} cursor='default' colorScheme={badgeColors[platform]} mx={1} mt={1}>{platform}</Badge>)}
                    </Flex>
                    <Flex align="center" justify="space-between">
                        <Text fontSize="2xl" _hover={{color:'skyblue'}} onClick={() => onQuestion()} cursor='pointer' fontWeight="semibold" lineHeight="short">
                            {question}
                        </Text>
                        
                    </Flex>

                    <Flex align='baseline' justify='flex-start'>
                        <Badge fontSize='sm' variant='subtle'>Answers : {answersCount}</Badge>
                    </Flex>

                    

                    <Flex align='baseline' justify='flex-start'>
                        <Text color='gray.300'> - {userName}</Text>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
  )
}

export default QuestionCard