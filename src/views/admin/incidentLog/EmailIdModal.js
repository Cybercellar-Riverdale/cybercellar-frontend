import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import BlockEmailsLine from './BlockEmailsLine'

function EmailIdModal({ emailId }) {
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
                        <Text padding='0rem 24rem' borderBottom={`1px solid ${borderColor}`}>Incident Analysis</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <BlockEmailsLine />
                    </ModalBody>

                    <ModalFooter margin='auto'>
                        <Button mr={3} onClick={onClose} borderRadius={4} fontWeight='500' backgroundColor='red.500' color='white'
                            sx={{
                                _hover: {
                                    backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                    color: 'white',           // Keeps the text color unchanged on hover
                                }

                            }}>
                            CANCLE
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EmailIdModal