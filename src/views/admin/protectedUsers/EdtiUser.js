import { Button, Flex, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Switch, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function EdtiUser({ email, username, tags, department, status }) {
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
        vendoremail: email,
        username: username,
        tags: tags,
        department: department
    };
    const [vendorDetails, setVendorDetails] = useState(initialValues);
    const [active, setActive] = useState(status);

    const handleChange = (e) => {
        setVendorDetails({ ...vendorDetails, [e.target.name]: e.target.value });
    }

    const handleActiveChange = () => {
        setActive((prevActive) => (prevActive === 'Active' ? 'Inactive' : 'Active'));
    };

    const handleEditSave = () => {
        if (!vendorDetails.vendoremail) {
            toast.error('Employee id cannot be empty', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (!vendorDetails.username) {
            toast.error('Username cannot be empty', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (vendorDetails.tags === '--Select Tags--') {
            toast.error('Please select a tag', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (vendorDetails.department === '--Select Department--') {
            toast.error('Please select a department', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else {
            console.log("Edited:", vendorDetails);
            console.log("Active:", active);
            toast.success('User Details Edited', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
            onClose();
        }
    }


    return (
        <>
            <Icon as={FaEdit} fontSize='18px' color={textColor} onClick={onOpen} cursor='pointer' />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader padding='0rem 9rem' borderBottom={`1px solid ${modalHeaderColor}`} mt={3}>Edit User Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Employee Id</FormLabel>
                            <Input color={textColor} value={vendorDetails.vendoremail} id='vendoremail' name='vendoremail' onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Username</FormLabel>
                            <Input color={textColor} value={vendorDetails.username} id='username' name='username' onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Tags</FormLabel>
                            <Select color={textColor} value={vendorDetails.tags} name='tags' id='tags' onChange={handleChange} >
                                <option >--Select Tags--</option>
                                <option >VIP</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Department</FormLabel>
                            <Select color={textColor} value={vendorDetails.department} name='department' id='department' onChange={handleChange} >
                                <option >--Select Department--</option>
                                <option >Department 1</option>
                                <option >Department 2</option>
                                <option >Department 3</option>
                                <option >Department 4</option>
                            </Select>
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
                            <Button mr={3} onClick={onClose} borderRadius={4} fontWeight='500' backgroundColor='red.500' color='white'
                                sx={{
                                    _hover: {
                                        backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }

                                }} >
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

export default EdtiUser