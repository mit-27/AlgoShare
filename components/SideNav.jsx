import {Box,Flex,Icon,Stack,Text,CloseButton,Spacer,Button} from '@chakra-ui/react'
import {MdHomeFilled,MdImportContacts} from 'react-icons/md'
import Link from 'next/link'
import {ComponentLink} from './NavLink';
import Filters from './Filters';
import AddQuestionModal from './AddQuestionModal'

// const SideNavLink = ({href, children, icon}) => (
//     <ComponentLink href={href}>
//         <Flex align="center" p={1}>
//             {/* <Box as={icon} mr={3} w="24px" /> */}
//             <Text fontWeight="bold">{children}</Text>
//         </Flex>
//     </ComponentLink>
// );


// const PageLinks = () => (
//     <Stack spacing={0} mb={8}>
//         <SideNavLink href="/" icon={<Icon as={MdHomeFilled} />}>
//             {'Home'}
//         </SideNavLink>
//         <SideNavLink href="/problems" icon={<Icon as={MdImportContacts} />}>
//             {'Problems'}
//         </SideNavLink>
       
//     </Stack>
// );


const SideNav = ({display,width,maxWidth,closedrawer}) => {

  return (
    <Box
            backgroundColor="gray.800"
            position="fixed"
            left="0"
            width="100%"
            height="100%"
            top="0"
            right="0"
          display={display}
          maxWidth={maxWidth}
          
            // {...props}
        >
           
            <Box top="4rem" position="relative" overflowY="auto" borderRightWidth="1px">
                <Box>
                   
                    <Flex justify="space-between" direction="column" height="calc(100vh - 4rem)" fontSize="sm" p="6">
                    {/* <Flex  justify='flex-end'  display={['block','none']}> */}
                      {/* <Spacer/> */}
                      {/* <Box> */}
                      <Button  display={['block','none']}  colorScheme='blue'  onClick={closedrawer} size='md'>Close</Button>

                      {/* </Box> */}
                    {/* </Flex> */}
                        {/* <PageLinks /> */}
                        
                        <Filters/>
                        <AddQuestionModal/>

                    </Flex>
                </Box>
            </Box>
    </Box>
  )
}

export default SideNav