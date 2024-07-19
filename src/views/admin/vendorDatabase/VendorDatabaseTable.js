import Card from 'components/card/Card'
import React, { useMemo, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Table, Thead, Tr, Th, Flex, Tbody, Text, Icon, Td, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, FormControl, FormLabel, Input, Select, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Switch, useColorMode, Badge, } from '@chakra-ui/react'
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import { MdAdd } from 'react-icons/md';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import EditVendor from './EditVendor';
import DeleteVendor from './DeleteVendor';

export function VendorDatabase({ columns, data }) {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const optionColor = useColorModeValue('gray.800', 'gray.200');
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const modalHeaderColor = useColorModeValue("grey", "white");
    const accBgColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.400');
    const selectStyles = {
        color: textColor,
        bg: useColorModeValue('white', 'gray.700'),
        // borderColor: borderColor,
    };
    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: { pageSize: 10 } // Setting initial page size to 5
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {
        rows,
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        initialState,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = tableInstance;

    return (
        <>
            <Card
                direction='column'
                w='100%'
                h="460px"
                px='0px'
                overflowX={{ sm: "scroll", lg: 'auto' }}
                mt={2}
            >
                {/* <Flex px='25px' justify='space-between' mb='20px' align='center'>
                                <Text
                                    color={textColor}
                                    fontSize='22px'
                                    fontWeight='700'
                                    lineHeight='100%'>
                                    Complex Table
                                </Text>
                                <Menu />
                            </Flex> */}
                <Table {...getTableProps()} variant='striped' colorScheme="ucValuation" mb='24px'>
                    <Thead>
                        {headerGroups.map((headerGroup, index) => (
                            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                {headerGroup.headers.map((column, index) => (
                                    <Th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        pe='10px'
                                        key={index}
                                        borderColor={borderColor}
                                    >
                                        <Flex
                                            justify='space-between'
                                            align='center'
                                            fontSize={{ sm: "10px", lg: "12px" }}
                                            color='gray.400'
                                        >
                                            {column.render("Header")}
                                        </Flex>
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {page.map((row, index) => { // Changed from `rows` to `page`
                            prepareRow(row);
                            return (
                                <Tr {...row.getRowProps()} key={index}>
                                    {row.cells.map((cell, index) => (
                                        <Td
                                            {...cell.getCellProps()}
                                            key={index}
                                            fontSize={{ sm: "14px" }}
                                            minW={{ sm: "150px", md: "200px", lg: "auto" }}
                                            borderColor='transparent'
                                        >
                                            {cell.render("Cell")}
                                        </Td>
                                    ))}
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>

            </Card>
            <Flex justify="center" align="center" mt={4} mr={4}>
                {/* Select page size dropdown */}
                <Text mr={2}>Show:</Text>
                <Select
                    sx={{ option: { color: textColor } }}
                    w="100px"
                    mr={4}
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[10, 20, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </Select>
                <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} mr={2}>
                    {'<<'}
                </Button>
                <Button onClick={() => previousPage()} disabled={!canPreviousPage} mr={2}>
                    {'<'}
                </Button>
                <Text mr={2}>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </Text>
                <Button onClick={() => nextPage()} disabled={!canNextPage} mr={2}>
                    {'>'}
                </Button>
                <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </Button>
            </Flex>
        </>
    )
}

function VendorDatabaseTable() {
    const { colorMode } = useColorMode();
    // const { columnsData, tableData } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    const columns = useMemo(() => [
        {
            Header: "VENDOR EMAIL",
            accessor: "vendoremail",
        },
        {
            Header: "NAME",
            accessor: "name",
        },
        {
            Header: "STATUS",
            accessor: "status",
            Cell: ({ row }) => (
                <Badge
                    backgroundColor={row.original.status === "Active" ? "green.200" : "red.200"} color='black'
                    textTransform="uppercase" variant='subtle' borderRadius='0px'>{row.original.status}</Badge>
            ),
        },
        {
            Header: "",
            accessor: "edit",
            Cell: ({ row }) => (
                // <Text>External Partner - {row.original.subject}</Text>
                <EditVendor email={row.original.vendoremail} name={row.original.name} status={row.original.status} />
            ),
        },
        {
            Header: "",
            accessor: "delete",
            Cell: ({ row }) => (
                <DeleteVendor email={row.original.vendoremail} />
            ),
        },
        // {
        //     Header: "TAGS",
        //     accessor: "tags",
        // },
        // {
        //     Header: "STATUS",
        //     accessor: "status",
        // },
        // {
        //     Header: "STATUS",
        //     accessor: "status",

        // },

    ], []);
    const data = useMemo(() => [
        {
            "vendoremail": "abc@gmail.com",
            "name": "Abc",
            "status": "Active"
        },
        {
            "vendoremail": "def@gmail.com",
            "name": "Def",
            "status": "Active"
        },
        {
            "vendoremail": "ghi@gmail.com",
            "name": "Ghi",
            "status": "Inactive"
        },
        {
            "vendoremail": "jkl@gmail.com",
            "name": "Jkl",
            "status": "Active"
        },
        {
            "vendoremail": "mno@gmail.com",
            "name": "Mno",
            "status": "Inactive"
        },
        {
            "vendoremail": "pqr@gmail.com",
            "name": "Pqr",
            "status": "Inactive"
        },
        {
            "vendoremail": "stu@gmail.com",
            "name": "Stu",
            "status": "Active"
        },
        {
            "vendoremail": "vwx@gmail.com",
            "name": "Vwx",
            "status": "Inactive"
        },
        {
            "vendoremail": "yz@gmail.com",
            "name": "Yz",
            "status": "Active"
        },
        {
            "vendoremail": "abc@gmail.com",
            "name": "Abc",
            "status": "Active"
        },
        {
            "vendoremail": "def@gmail.com",
            "name": "Def",
            "status": "Active"
        },
        {
            "vendoremail": "ghi@gmail.com",
            "name": "Ghi",
            "status": "Inactive"
        },
        {
            "vendoremail": "jkl@gmail.com",
            "name": "Jkl",
            "status": "Active"
        },
        {
            "vendoremail": "mno@gmail.com",
            "name": "Mno",
            "status": "Inactive"
        },
        {
            "vendoremail": "pqr@gmail.com",
            "name": "Pqr",
            "status": "Inactive"
        },
        {
            "vendoremail": "stu@gmail.com",
            "name": "Stu",
            "status": "Active"
        },
        {
            "vendoremail": "vwx@gmail.com",
            "name": "Vwx",
            "status": "Inactive"
        },
        {
            "vendoremail": "yz@gmail.com",
            "name": "Yz",
            "status": "Active"
        }
    ], []);

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const optionColor = useColorModeValue('gray.800', 'gray.200');
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const modalHeaderColor = useColorModeValue("grey", "white");
    const accBgColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.400');
    const selectStyles = {
        color: textColor,
        bg: useColorModeValue('white', 'gray.700'),
        // borderColor: borderColor,
    };

    const initialFilterValues = {
        name: '',
        status: '--Select Status--'
    }

    const [filter, setFilter] = useState(initialFilterValues);

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    const handleFilterSave = () => {
        if (!filter.name) {
            toast.error('Please enter a name', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (filter.status === '--Select Status--') {
            toast.error('Please select a status', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else {
            console.log("Save clicked");
            console.log("Entered Data:", filter);
        }
    }

    const [expandedIndex, setExpandedIndex] = useState(null); // Manage expanded index state

    const handleCancel = () => {
        setExpandedIndex(null); // Set to null to close the Accordion
        setFilter(initialFilterValues);
    };

    const initialValues = {
        "vendoremail": '',
        "name": '',
    }
    const [vendorDetails, setVendorDetails] = useState(initialValues);
    const [active, setActive] = useState('');

    const handleChange = (e) => {
        setVendorDetails({ ...vendorDetails, [e.target.name]: e.target.value });
    }

    const handleEditSave = () => {
        if (!vendorDetails.vendoremail) {
            toast.error('Please enter a vendor email', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (!vendorDetails.name) {
            toast.error('Please enter a vendor name', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else {
            console.log("Edited:", vendorDetails);
            console.log("Active:", active);
            toast.success('Vendor Created Successfully', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            })
            setVendorDetails(initialValues);
            onClose();
        }
    }

    const handleActiveChange = () => {
        setActive((prevActive) => (prevActive === 'Active' ? 'Inactive' : 'Active'));
    };

    return (
        <div>
            <Text fontSize="35px" fontWeight="600" >Vendor Database</Text>

            <Card overflow='auto' height='600px'>
                <Flex align='center' justify='space-between'>
                    <Accordion allowToggle index={expandedIndex} onChange={setExpandedIndex} width='92%' backgroundColor={accBgColor} >
                        <AccordionItem>
                            <h2>
                                <AccordionButton >
                                    <Box as='span' flex='1' textAlign='left' >
                                        Filter
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
                                    {/* <FormControl>
                                            <FormLabel>Permission</FormLabel>
                                            <Select color={textColor} name='permission' id='permission' onChange={handleFilterChange} >
                                                <option style={{ color: optionColor }}>--Select Permission--</option>
                                                <option>Admin</option>
                                                <option >User</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Tags</FormLabel>
                                            <Select color={textColor} name='tag' id='tag' onChange={handleFilterChange} >
                                                <option >--Select Tags--</option>
                                                <option >VIP</option>
                                                <option >Department</option>
                                            </Select>
                                            <Input type='text' placeholder='Sender' />
                                        </FormControl> */}
                                    <FormControl>
                                        <FormLabel>Name</FormLabel>
                                        <Input type='text' placeholder='Name...' color={textColor} value={filter.name} name='name' id='name' onChange={handleFilterChange} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Status</FormLabel>
                                        <Select name='status' id='status' value={filter.status} onChange={handleFilterChange} sx={{ option: { color: textColor } }}>
                                            <option style={{ color: optionColor }}>--Select Status--</option>
                                            <option>Active</option>
                                            <option >Inactive</option>
                                        </Select>
                                        {/* <Input type='text' placeholder='Status...' color={textColor} name='status' id='status' onChange={handleFilterChange} /> */}
                                    </FormControl>
                                    {/* <FormControl>
                                                <FormLabel>User Interaction with mail</FormLabel>
                                                <Input type='text' placeholder='User Interaction with mail' color={textColor} />
                                            </FormControl>
                                            {filter.timeDuration === 'Custom Date' ? (
                                                <>
                                                    <FormControl>
                                                        <FormLabel>From</FormLabel>
                                                        <Input type='date' placeholder='Recipient' color={textColor} name='startDate' id='startDate' onChange={handleFilterChange} />
                                                    </FormControl>
                                                    <FormControl>
                                                        <FormLabel>To</FormLabel>
                                                        <Input type='date' placeholder='Recipient' color={textColor} name='endDate' id='endDate' onChange={handleFilterChange} />
                                                    </FormControl>
                                                </>
                                            ) : null} */}
                                    <Flex mt={8}>
                                        <Button
                                            // me='100%'
                                            // mb='50px'
                                            w='80px'
                                            // minW='140px'
                                            // mt={{ base: "30px", "2xl": "auto" }}
                                            variant='brand'
                                            fontWeight='500'
                                            onClick={handleFilterSave} mr={2}
                                        >
                                            APPLY
                                        </Button>
                                        <Button backgroundColor='red.500' color='white' w='80px'
                                            fontWeight='500' onClick={() => { handleCancel(); }}
                                            sx={{
                                                _hover: {
                                                    backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                                    color: 'white',           // Keeps the text color unchanged on hover
                                                }
                                            }}>
                                            CANCEL
                                        </Button>
                                    </Flex>
                                </SimpleGrid>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Button borderRadius={0} onClick={onOpen} >
                        <Icon as={MdAdd} color={textColor} fontSize='25px' />
                        <Text color={textColor} fontSize='20px' >Add</Text>
                    </Button>
                </Flex>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader padding='0rem 10rem' borderBottom={`1px solid ${modalHeaderColor}`} mt={3}>Add Vendor</ModalHeader>
                        <ModalCloseButton onClick={() => { setVendorDetails(initialValues) }} />
                        <Flex marginLeft='auto' paddingRight='25px'>
                            <Text color='Red'>*&nbsp;</Text>
                            <Text fontSize='13px'> = Required Information</Text>
                        </Flex>
                        <ModalBody>
                            <FormControl isRequired>
                                <FormLabel>Vendor Email</FormLabel>
                                <Input placeholder='Enter Email' color={textColor} value={vendorDetails.vendoremail} id='vendoremail' name='vendoremail' onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input placeholder='Enter Name' color={textColor} value={vendorDetails.name} id='name' name='name' onChange={handleChange} />
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
                                <Button mr={3} onClick={() => { onClose(); setVendorDetails(initialValues); setActive('Inactive') }} borderRadius={4} backgroundColor='red.500' color='white'
                                    fontWeight='500'
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
                <VendorDatabase columns={columns} data={data} />
            </Card>
        </div>
    )
}

export default VendorDatabaseTable