import {useColorMode, Box, Text, Stack, CheckboxGroup, Checkbox, Select} from '@chakra-ui/react';
import React,{useState} from 'react'
import {useSearch} from '../utils/search'

const Filters = () => {
    // const [questionsType, setquestionsType] = useState(['Leetcode', 'HackerRank', 'CodeForce', 'CodeChef','InterviewBit']);
    const {platformFilters,onFilterPlatform} = useSearch()


    // const onFiterQuestions = (newValues) => {
    //     setquestionsType(newValues);
    // };

    return (
    
    <Box>
        <Stack spacing={3} mb={8} >
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