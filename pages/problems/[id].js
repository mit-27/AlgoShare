import React from 'react'
import { useRouter } from 'next/router'
import NavDefault from '../../components/NavDefault'
import { Box, Heading, Flex, Badge, VStack, Stack, Center, useToast, Button, Select, FormLabel, Text, Link } from '@chakra-ui/react'
import { useState } from 'react'
import CodeCard from '../../components/CodeCard'
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { python } from '@codemirror/lang-python'
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import { useUser } from '@auth0/nextjs-auth0'
import { withAuthModal } from '../../components/AuthModal'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const languagesObjects = { 'java': java(), 'python': python() }

const ProblemAnswers = ({ openAuthModal }) => {
    const router = useRouter()
    const toast = useToast()
    const [platformName, setp] = useState('Leetcode')
    const [code, setCode] = useState("")
    const [language, setLanguage] = useState("java")
    const { user } = useUser()

    const onAdd = () => {

        if (!user) {
            return openAuthModal()
        }





        if (code === "" || language === "") {
            toast({
                title: 'Select language',
                status: 'error',
                position: 'bottom'
            })
        }
    }




    return (
        <>
            <NavDefault />
            <Box>
                <Box mt={4}>
                    <Center>
                        <Stack spacing={3} px={5} width="full" maxWidth="1280px" alignSelf='center' borderBottomWidth='medium' pt={20} pb={5}>

                            <Heading>

                                <Link size='xl' href="https://www.hackerrank.com/domains/data-structures" isExternal color='teal.200'>Q : Longest Substring Without Repeating Characters <ExternalLinkIcon mx='2px' /></Link>

                            </Heading>
                            <Flex align='baseline' justify='flex-start'>
                                <Badge fontSize='md' variant='subtle'>Answers : 30</Badge>
                            </Flex>

                            <Flex align="baseline" justify='flex-start' py={2} >
                                <Heading color='wheat' size='md' >Platforms : </Heading>
                                <Badge cursor='default' colorScheme='teal' ml={3} mr={1}>{platformName}</Badge>
                                <Badge cursor='default' colorScheme='green' mr={1}>{platformName}</Badge>
                                <Badge cursor='default' colorScheme='purple' mr={1}>{platformName}</Badge>
                            </Flex>

                            <Flex align='baseline' justify='flex-start'>
                                <Text color='gray.300'> - Mit Suthar</Text>
                            </Flex>
                        </Stack>
                    </Center>

                    <Box width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
                        <CodeCard code="public class main" language="java" />
                        <CodeCard code="public class main" language="java" />
                        <CodeCard code="public class main" language="java" />
                        <CodeCard code="public class main" language="java" />

                    </Box>

                    <Center>
                        <Stack spacing={3} px={5} width="full" maxWidth="1280px" alignSelf='center' borderTopWidth='medium' pt={20} pb={5}>
                            <Box
                                borderWidth="1px"
                                borderRadius={8}
                                p={5}
                                mb={3}
                                backgroundColor="gray.800"
                            >

                                <Heading my={3} size='xl' >Add your answer</Heading>
                                <FormLabel my={2} >Select the Programming Language</FormLabel>
                                <Select my={3} defaultValue={language} onChange={(e) => setLanguage(e.target.value)} >
                                    <option value='java'>JAVA</option>
                                    <option value='python'>Python</option>
                                </Select>
                                <FormLabel my={2} >Enter your code below</FormLabel>
                                <CodeMirror
                                    value={code}
                                    theme={oneDark}
                                    height="300px"
                                    className='codemirror'
                                    // editable={false}
                                    extensions={[languagesObjects[language]]}
                                    onChange={(value, viewUpdate) => {
                                        setCode(value)
                                    }}
                                />
                                <Button my={3} ml={3} mt={8} size='lg' onClick={() => onAdd()} colorScheme='cyan'>Add</Button>

                            </Box>
                        </Stack>
                    </Center>

                </Box>
            </Box>
        </>
    )
}

export default withAuthModal(ProblemAnswers)