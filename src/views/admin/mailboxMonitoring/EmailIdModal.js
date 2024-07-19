import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function EmailIdModal({ emailId, sender, receiver, subject }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("grey", "white");
    return (
        <>
            <Text onClick={onOpen} cursor='pointer'>{emailId}</Text>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxH="700px" maxW="1000px">
                    <ModalHeader margin='auto'>
                        <Text padding='0rem 24rem' borderBottom={`1px solid ${borderColor}`}>Mailbox Analysis</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <Flex align='center'>
                                <FormLabel width='100px'>From:</FormLabel>
                                <Input type='text' value={sender} color={textColor} isReadOnly />
                            </Flex>
                        </FormControl>
                        <FormControl mt={2}>
                            <Flex align='center'>
                                <FormLabel width='100px'>To:</FormLabel>
                                <Input type='text' value={receiver} color={textColor} isReadOnly />
                            </Flex>
                        </FormControl>
                        <FormControl mt={2}>
                            <Flex align='center'>
                                <FormLabel width='100px'>Subject:</FormLabel>
                                <Input type='text' color={textColor} value={subject} />
                            </Flex>
                        </FormControl>
                        <FormControl mt={2}>
                            <Flex align='center'>
                                <FormLabel width='100px'></FormLabel>
                                <Textarea rows={6} color={textColor} />
                            </Flex>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter margin='auto'>
                        <Button mr={3} onClick={onClose} borderRadius={4} fontWeight='500' backgroundColor='red.500' color='white'
                            sx={{
                                _hover: {
                                    backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                    color: 'white',           // Keeps the text color unchanged on hover
                                }

                            }}>
                            CANCEL
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EmailIdModal