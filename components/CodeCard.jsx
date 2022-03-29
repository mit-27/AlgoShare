import {useColorMode, Box, Badge, Text, Flex, Stack} from '@chakra-ui/react';
import {useRouter} from 'next/router'
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { python } from '@codemirror/lang-python'
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import { useState } from 'react';
import Voter from './Voter';



const languagesObjects = {'java':java(),'python':python()}



const CodeCard = ({language,code}) => {

    const router = useRouter()
    const [CurrentCOde,setCurrentCode] = useState(code)

   


    return (
    <Box
            borderWidth="1px"
            borderRadius={8}
            p={1}
            mb={3}
            backgroundColor="gray.800"
        >
            <Flex>
                <Voter/>
                <Stack ml={3} mt={2} mb={2} w="100%" pr={4}>
                    <Flex align="center" justify="space-between">
                        <Text fontSize="xl" cursor='pointer' fontWeight="semibold" lineHeight="short">
                            Programming Language : {language}
                        </Text>
                        
                    </Flex>
                    <Flex align='baseline'>
                    <Box>
                    <CodeMirror
                        value={CurrentCOde}
                        theme={oneDark}
                        
                        className='codemirror'
                        // editable={false}
                        extensions={[languagesObjects[language]]}
                        onChange={(value, viewUpdate) => {
                            setCurrentCode(value)
                        }}
                    />
                    </Box>
                    </Flex>

                    

                    <Flex align='baseline' justify='flex-end'>
                        <Badge cursor='default' fontSize='sm' variant='subtle'> - Mit Suthar</Badge>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
  )
}

export default CodeCard