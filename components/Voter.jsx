import React from 'react'
import {ChevronDownIcon,ChevronUpIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import {Box,Stack,IconButton} from '@chakra-ui/react'

const Voter = () => {

    const [upvoted,setUpvote] = useState(false)
    const [downvoted,setDownvote] = useState(false)

    const onVote = (vote) => {
      setUpvote(vote)
      setDownvote(!vote)
    }



    return (
      <>

        <Stack align="center" ml={2}>
                  <IconButton
                      aria-label="Upvote"
                      icon={<ChevronUpIcon/>}
                      size="sm"
                      fontSize="20px"
                      onClick={() => onVote(true)}
                      variant={upvoted ? 'solid' : 'ghost'}
                      color="gray.500"
                  />
                  <Box fontWeight="semibold">20</Box>
                  <IconButton
                      aria-label="Downvote"
                      icon={<ChevronDownIcon/>}
                      size="sm"
                      fontSize="20px"
                      onClick={() => onVote(false)}
                      variant={downvoted ? 'solid' : 'ghost'}
                      color="gray.500"
                  />
        </Stack>

      </>
    )
}

export default Voter