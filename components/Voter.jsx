import React from 'react'
import {ChevronDownIcon,ChevronUpIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import {Box,Stack,IconButton} from '@chakra-ui/react'
import { useUser } from '@auth0/nextjs-auth0'
import { withAuthModal } from './AuthModal'
import {useMutation} from '@apollo/client'
import {INSERT_VOTE_MUTATION,UPDATE_VOTE_MUTATION} from '../graphql/queries'

const Voter = ({openAuthModal,votes,answerID,score}) => {

    const {user} = useUser()

    const currentUserVotedDeal = votes.find((voted) => voted.userID === user?.sub);
    const upvoted = currentUserVotedDeal && currentUserVotedDeal.upvoted;
    const downvoted = currentUserVotedDeal && !currentUserVotedDeal.upvoted;

    const [updateVote] = useMutation(UPDATE_VOTE_MUTATION);
    const [insertVote] = useMutation(INSERT_VOTE_MUTATION);
    

    const onVote = (vote) => {

      if(!user) {
        return openAuthModal()
      }

      if(currentUserVotedDeal)
      {
        return updateVote({
          variables: {
            codeAnswerID:answerID,
            upvoted:vote,
            userID:user.sub
          }
        })
      }
      else
      {
        return insertVote({
          variables:{
            codeAnswerID:answerID,
            upvoted:vote,
            userID:user.sub
          }
        })
      }

      // setUpvote(vote)
      // setDownvote(!vote)
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
                  <Box fontWeight="semibold">{score}</Box>
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

export default withAuthModal(Voter)