import React, {useState, useRef} from 'react';
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Button,
    Checkbox,
    CheckboxGroup,
    Stack
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {withAuthModal} from './AuthModal'
import {useUser} from '@auth0/nextjs-auth0'


const AddQuestionModal = ({openAuthModal}) => {
    const initialRef = useRef();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {handleSubmit,formState:{errors}, register,reset} = useForm();

    const [questionsType, setquestionsType] = useState([]);

    const {user} = useUser()


    const onFiterQuestions = (newValues) => {
        setquestionsType(newValues);
    };

    const onOpenDealModal = () => {
        // if (!userId) {
        //     return openAuthModal();
        // }
        if(!user) {
            console.log("")
            return openAuthModal()
        }
        
        onOpen();
        

        
    };

    const onCloseModal = () => {
        reset()
        onClose()
    }


    return (
        <>
            <Button onClick={onOpenDealModal} colorScheme="teal" variant="solid" minH="40px" w="100%">
                Ask Question
            </Button>

            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={() =>onCloseModal()} >
                <ModalOverlay />
                <ModalContent borderRadius={4}>
                    <form
                        onSubmit={handleSubmit((data) =>
                            {
                                console.log(data);
                                console.log(questionsType)
                                onCloseModal()
                            }
                            // onCreateDeal(
                            //     {
                            //         alcoholType,
                            //         dayOfWeek,
                            //         daysActive,
                            //         description: data.description,
                            //         endTime: data.endTime,
                            //         locationId: data.locationId,
                            //         startTime: data.startTime
                            //     },
                            //     onClose
                            // )
                        )}
                    >
                        <ModalHeader>Add Question</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl mt={4} isInvalid={errors.question && errors.question.message}>
                                <FormLabel>Question</FormLabel>
                                <Input
                                    name="question"
                                    id="question"
                                    {...register("question",{required:"Please Enter a question"})}
                                    // ref={register("question",{
                                    //     required: 'Please enter a question.'
                                    // })}
                                    placeholder="Enter Question"
                                />
                                <FormErrorMessage>{errors.question && errors.question.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl mt={4} isInvalid={errors.questionURL && errors.questionURL.message}>
                                <FormLabel>Question's URL</FormLabel>
                                <Input
                                    name="questionURL"
                                    {...register("questionURL",{required:"Please Enter a question URL"})}
                                    // ref={register({
                                    //     required: 'Please enter a question.'
                                    // })}
                                    placeholder="Enter Question's URL"
                                />
                                <FormErrorMessage>{errors.questionURL && errors.questionURL.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl as="fieldset">
                                <FormLabel as="legend">Select Platform</FormLabel>
                                <Stack spacing={3}>
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
                            </FormControl>
                            
                          
                            
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={() => onCloseModal()}>Cancel</Button>
                            <Button  type="submit" colorScheme="teal" ml={3}>
                                Ask
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
  
}

export default withAuthModal(AddQuestionModal)