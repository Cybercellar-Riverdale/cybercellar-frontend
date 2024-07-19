import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { MdDelete, MdOutlineDelete, MdOutlineDeleteForever } from 'react-icons/md'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function DeleteVendor({ email }) {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();
    const handleDelete = () => {
        toast.success('Vendor Deleted Successfully', {
            position: toast.POSITION.TOP_CENTER,
            theme: colorMode,
        }
        );
        onClose();
    }
    return (
        <>
            <Icon as={DeleteIcon} fontSize='18px' color={textColor} cursor='pointer' onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Text textAlign="center" fontWeight="700" fontSize="24px">
                            Are you sure to delete ?
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Flex margin='auto'>
                            <Button borderRadius={4} variant='brand' onClick={handleDelete}
                                fontWeight='500' mr={2}
                                w='70px'>Yes</Button>
                            <Button onClick={onClose} borderRadius={4} backgroundColor='red.500' color='white'
                                fontWeight='500' w='70px'
                                sx={{
                                    _hover: {
                                        backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }
                                }}>No</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteVendor