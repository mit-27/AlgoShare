import React,{useState} from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { python } from '@codemirror/lang-python'
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import {withAuthModal} from './AuthModal'
import { Box, Heading, Flex, Badge, VStack, Stack, Center, useToast, Button, Select, FormLabel, Text, Link, Spinner } from '@chakra-ui/react'
import {useMutation} from '@apollo/client'
import {ADD_CODE_ANSWER_MUTATION} from '../graphql/queries'

const languagesObjects = { 'java': java(), 'python': python(), 'cpp': cpp(), 'javascript': javascript({ jsx: 'false' }) }


const CodeForm = ({openAuthModal,questionID}) => {

    const toast = useToast()
    const [language, setLanguage] = useState("java")
    const [code, setCode] = useState("")
    const {user} = useUser()

    const resetForm = () => {
        setLanguage("java")
        setCode("")
    }

    const [AddAnswerMutation,AddAnswerMutationResult] = useMutation(ADD_CODE_ANSWER_MUTATION,{onCompleted:resetForm})

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
        else {
            AddAnswerMutation({variables:{codeAnswer:code,language:language,questionID:questionID,userID:user.sub}})
        }
    }


    return (
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
                        <option value='java'>Java</option>
                        <option value='python'>Python</option>
                        <option value='cpp'>C++</option>
                        <option value='javascript'>JavaScript</option>

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
                    <Button isLoading={AddAnswerMutationResult.loading} loadingText="Adding"  my={3} ml={3} mt={8} size='lg' onClick={() => onAdd()} colorScheme='cyan'>Add</Button>

                </Box>
            </Stack>
        </Center>
    )
}

export default withAuthModal(CodeForm)