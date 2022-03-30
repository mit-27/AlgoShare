import {useColorMode, Box, Text, Stack, CheckboxGroup, Checkbox, Select,Button,Link,Icon} from '@chakra-ui/react';
import React,{useState} from 'react'
import {useSearch} from '../utils/search'
import {FaGithub} from 'react-icons/fa'

const Filters = () => {
    // const [questionsType, setquestionsType] = useState(['Leetcode', 'HackerRank', 'CodeForce', 'CodeChef','InterviewBit']);
    const {platformFilters,onFilterPlatform} = useSearch()


    // const onFiterQuestions = (newValues) => {
    //     setquestionsType(newValues);
    // };

    return (
    
    <Box>
        <Stack spacing={3} mb={8} >
            {/* <Link href="https://github.com/mit-27/Algorithms" isExternal ><Icon as={FaGithub} w='full' h={7} /></Link> */}
            {/* <Button as='a' href='https://github.com/mit-27/Algorithms'   colorScheme="gray.200" leftIcon={<FaGithub/>}  mb={4} variant='outline'>Github Repo</Button> */}
            <Text mb={2} fontWeight="bold">
                {'Filter Platform specific Questions'}
            </Text>
            <CheckboxGroup
                onChange={onFilterPlatform}
                spacing={2}
                variantColor="teal"
                value={platformFilters}
            >
                <Checkbox value="LEETCODE">Leetcode</Checkbox>
                <Checkbox value="HACKERRANK">HackerRank</Checkbox>
                <Checkbox value="CODEFORCE">CodeForce</Checkbox>
                <Checkbox value="CODECHEF">CodeChef</Checkbox>
                <Checkbox value="INTERVIEWBIT">InterviewBit</Checkbox>
            </CheckboxGroup>
        </Stack>
    </Box>  
    
  )
}

export default Filters