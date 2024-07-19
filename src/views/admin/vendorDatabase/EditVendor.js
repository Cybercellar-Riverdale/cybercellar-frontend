import { Button, Flex, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function EditVendor({ email, name, status }) {
    const { colorMode } = useColorMode();
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const optionColor = useColorModeValue('gray.800', 'gray.200');
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const modalHeaderColor = useColorModeValue("grey", "white");
    const selectStyles = {
        color: textColor,
        bg: useColorModeValue('white', 'gray.700'),
        // borderColor: borderColor,
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialValues = {
        "vendoremail": email,
        "name": name,
    }
    const [vendorDetails, setVendorDetails] = useState(initialValues);
    const [active, setActive] = useState(status);

    const handleChange = (e) => {
        setVendorDetails({ ...vendorDetails, [e.target.name]: e.target.value });
    }

    const handleEditSave = () => {
        if (!vendorDetails.vendoremail) {
            toast.error('Vendor email cannot be empty', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (!vendorDetails.name) {
            toast.error('Name cannot be empty', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else {
            console.log("Edited:", vendorDetails);
            console.log("Active:", active);
            toast.success('Vendor Details Edited', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
            onClose();
        }
    }


    const handleActiveChange = () => {
        setActive((prevActive) => (prevActive === 'Active' ? 'Inactive' : 'Active'));
    };

    return (
        <>
            <Icon as={FaEdit} fontSize='18px' color={textColor} onClick={onOpen} cursor='pointer' />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader padding='0rem 8rem' borderBottom={`1px solid ${modalHeaderColor}`} mt={3}>Edit Vendor Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Vendor Email</FormLabel>
                            <Input color={textColor} value={vendorDetails.vendoremail} id='vendoremail' name='vendoremail' onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Name</FormLabel>
                            <Input color={textColor} value={vendorDetails.name} id='name' name='name' onChange={handleChange} />
                        </FormControl>
                        {/* <FormControl mt={4}>
                            <FormLabel>Status</FormLabel>
                            <Input color={textColor} value={vendorDetails.status} id='status' name='status' onChange={handleChange} />
                        </FormControl> */}
                    </ModalBody>

                    <ModalFooter>
                        <FormControl display="flex" alignItems="center" mr={4}>
                            <FormLabel htmlFor="status-switch" mb="0">
                                Active
                            </FormLabel>
                            <Switch
                                id="status-switch"
                                colorScheme={active === "Active" ? "green" : "red"}
                                isChecked={active === "Active"}
                                onChange={handleActiveChange}
                            />
                        </FormControl>
                        <Flex>
                            <Button mr={3} onClick={onClose} borderRadius={4} backgroundColor='red.500' color='white'
                                fontWeight='500'
                                sx={{
                                    _hover: {
                                        backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }
                                }}>
                                CANCEL
                            </Button>
                            <Button onClick={handleEditSave} borderRadius={4} variant='brand'
                                fontWeight='500'
                                w='100px'>SAVE</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditVendor