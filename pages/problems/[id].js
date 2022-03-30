/* eslint react/prop-types: 0 */
import React from 'react'
import { useRouter } from 'next/router'
import NavDefault from '../../components/NavDefault'
import { Box, Heading, Flex, Badge, VStack, Stack, Center, useToast, Button, Select, FormLabel, Text, Link, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import CodeCard from '../../components/CodeCard'
import { useUser } from '@auth0/nextjs-auth0'
import EmptySearch from '../../components/EmptySearch';
import CodeForm from '../../components/CodeForm'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { withApollo } from '../../graphql/apollo'
import { useSubscription } from '@apollo/client'
import { GET_ONE_CODE_QUESTION_SUBSCRIPTION } from '../../graphql/queries'
import { calculateScoreAndSortDesc } from '../../utils/answers'


const badgeColors = {
    LEETCODE: 'yellow',
    HACKERRANK: 'blue',
    CODEFORCE: 'red',
    CODECHEF: 'orange',
    INTERVIEWBIT: 'teal'
};

const ProblemAnswers = ({ openAuthModal }) => {
    const router = useRouter()
    // const [loading, setLoading] = useState(true)
    const toast = useToast()
    const [language, setLanguage] = useState("java")
    const [code, setCode] = useState("")
    const { user } = useUser()


    const { data, loading, error } = useSubscription(GET_ONE_CODE_QUESTION_SUBSCRIPTION, { variables: { questionID: router.query.id } })

    const Question = data ? { ...data.code_questions_by_pk, code_answers: calculateScoreAndSortDesc(data.code_questions_by_pk.code_answers) } : ""

    // const CodeAnswers = data ? data.code_questions_by_pk.code_answers : []

    if (error) {
        console.log("Error Message : ", error.message)
        router.replace('/404')
    }











    return (
        <>
            <NavDefault />
            {loading ? (
                <Flex pt={24} align="center" justify="center">

                    <Spinner size="xl" label="Loading Deals" />
                </Flex>
            )
                :
                (
                    <Box>
                        <Box mt={4}>
                            <Center>
                                <Stack spacing={3} px={5} width="full" maxWidth="1280px" alignSelf='center' borderBottomWidth='medium' pt={20} pb={5}>

                                    <Heading>

                                        <Link size='xl' mr={2} href={Question.questionURL} isExternal color='teal.200'>{Question.question}  <ExternalLinkIcon mx='2px' /></Link>

                                    </Heading>
                                    <Flex align='baseline' justify='flex-start'>
                                        <Badge fontSize='md' variant='subtle'>Answers : {Question.code_answers.length}</Badge>
                                    </Flex>

                                    <Flex align="baseline" justify='flex-start' py={2} >
                                        <Heading color='wheat' size='md' >Platforms : </Heading>
                                        {Question.platforms.map((platform) => <Badge key={platform} cursor='default' colorScheme={badgeColors[platform]} mx={1} mt={1}>{platform}</Badge>)}

                                        {/* <Badge cursor='default' colorScheme='teal' ml={3} mr={1}>{platformName}</Badge>
                                        <Badge cursor='default' colorScheme='green' mr={1}>{platformName}</Badge>
                                        <Badge cursor='default' colorScheme='purple' mr={1}>{platformName}</Badge> */}
                                    </Flex>

                                    <Flex align='baseline' justify='flex-start'>
                                        <Text color='gray.300'> - {Question.user.name}</Text>
                                    </Flex>
                                </Stack>
                            </Center>

                            <Box width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
                                {Question.code_answers.length ? (
                                    Question.code_answers.map((codeAnswer) => <CodeCard key={codeAnswer.id} answerID={codeAnswer.id} code={codeAnswer.codeAnswer} votes={codeAnswer.Votes} score={codeAnswer.score} language={codeAnswer.language} user={codeAnswer.user} />)
                                )
                                    :
                                    (
                                        <EmptySearch resultDetails="Please add your answer by using below form. Thank You!" resultName="No Answers found" />
                                    )
                                }


                                {/* <CodeCard code="public class main" language="java" />
                                <CodeCard code="public class main" language="java" />
                                <CodeCard code="public class main" language="java" />
                                <CodeCard code="public class main" language="java" /> */}

                            </Box>

                            <CodeForm questionID={Question.id} />



                        </Box>
                    </Box>
                )
            }
        </>
    )
}

export default withApollo(ProblemAnswers, { ssr: false })