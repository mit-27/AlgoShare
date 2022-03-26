import {useColorMode, Box, Text, Stack, CheckboxGroup, Checkbox, Select} from '@chakra-ui/react';
import React,{useState} from 'react'

const Filters = () => {
    const [questionsType, setquestionsType] = useState(['Leetcode', 'HackerRank', 'CodeForce', 'CodeChef','InterviewBit']);


    const onFiterQuestions = (newValues) => {
        setquestionsType(newValues);
    };

    return (
    
    <Box>
        <Stack spacing={3} mb={8} >
            <Text mb={2} fontWeight="bold">
                {'Filter Platform specific Questions'}
            </Text>
            <CheckboxGroup
                onChange={onFiterQuestions}
                spacing={2}
                variantColor="teal"
                value={questionsType}
            >
                <Checkbox value="Leetcode">Leetcode</Checkbox>
                <Checkbox value="HackerRank">HackerRank</Checkbox>
                <Checkbox value="CodeForce">CodeForce</Checkbox>
                <Checkbox value="CodeChef">CodeChef</Checkbox>
                <Checkbox value="InterviewBit">InterviewBit</Checkbox>
            </CheckboxGroup>
        </Stack>
    </Box>  
    
  )
}

export default Filters