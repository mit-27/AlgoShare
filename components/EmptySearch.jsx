import React from 'react'
import {useColorMode, Stack, Text, Flex, Icon} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'

const EmptySearch = ({resultName,resultDetails}) => {
  return (
    <Flex justify="center" textAlign="center" mb={8} py={12}>
            <Stack align="center">
                <SearchIcon w={5} h={5}/>
                {/* <Icon name="search" size="64px" color="gray.500" /> */}
                <Text fontSize="xl" fontWeight="bold" mt={4}>
                    {resultName==="" ? 'No Results Found' : resultName}
                </Text>
                <Text color="gray.400">{resultDetails==="" ? 'Nothing matched your search query.' : resultDetails}</Text>
            </Stack>
    </Flex>
  )
}

export default EmptySearch