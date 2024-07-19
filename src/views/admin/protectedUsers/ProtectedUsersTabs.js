import Card from 'components/card/Card'
import React, { useMemo, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Table, Thead, Tr, Th, Flex, Tbody, Text, Icon, Td, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, FormControl, FormLabel, Input, Select, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Switch, useDisclosure, useColorMode, Badge, } from '@chakra-ui/react'
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import { MdAdd } from 'react-icons/md';
import UserRiskScoreBar from './UserRiskScoreBar';
import UserRiskProfile from './UserRiskProfile';
import UserClicksPhishingLinksBar from './UserClicksPhishingLinksBar';
import UserClicksPhishingLinksPie from './UserClicksPhishingLinksPie';
import ReportedPhishingAttemptsLine from './ReportedPhishingAttemptsLine';
import ReportedPhishingAttemptsBar from './ReportedPhishingAttemptsBar';
import UserTrainingRatesDonut from './UserTrainingRatesDonut';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import EdtiUser from './EdtiUser';

export function ProtectedUsersTable({ columns, data }) {
    const { colorMode } = useColorMode();
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
                h="380px"
                px='0px'
                overflowX={{ sm: "scroll", lg: "auto" }}
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

function ProtectedUsersTabs() {
    const { colorMode } = useColorMode();
    // const { columnsData, tableData } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    const columns = useMemo(() => [
        {
            Header: "EMPLOYEE ID",
            accessor: "empid",
        },
        {
            Header: "USERNAME",
            accessor: "username",
        },
        {
            Header: "PERMISSIONS",
            accessor: "permissions",
        },
        // {
        //     Header: "SUBJECT",
        //     accessor: "subject",
        //     Cell: ({ row }) => (
        //         <Text>External Partner - {row.original.subject}</Text>
        //     ),
        // },
        {
            Header: "TAGS",
            accessor: "tags",
        },
        {
            Header: "DEPARTMENT",
            accessor: "department",
        },
        {
            Header: "STATUS",
            accessor: "status",
            Cell: ({ row }) => (
                <Badge
                    backgroundColor={row.original.status === "Active" ? "green.400" : "red.400"}
                    textTransform="uppercase" variant='subtle' borderRadius='0px' color='black'
                >{row.original.status}</Badge>
            )
        },
        {
            Header: "",
            accessor: "edit",
            Cell: ({ row }) => (
                // <Text>External Partner - {row.original.subject}</Text>
                row.original.permissions !== 'Admin' ?
                    (<EdtiUser email={row.original.empid} username={row.original.username} tags={row.original.tags} department={row.original.department} status={row.original.status} />) : ""
            ),
        },
        // {
        //     Header: "STATUS",
        //     accessor: "status",

        // },

    ], []);
    const data = useMemo(() => [
        {
            "empid": "EMP1001",
            "username": "Richard E. Skalski",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 1",
            "status": "Active"
        },
        {
            "empid": "EMP1002",
            "username": "Donald M. Dillard",
            "permissions": "Admin",
            "tags": "VIP",
            "department": "Department 2",
            "status": "Active"
        },
        {
            "empid": "EMP1003",
            "username": "Tyler C. Rodriguez",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 3",
            "status": "Inactive"
        },
        {
            "empid": "EMP1004",
            "username": "Roy D. Barron",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 1",
            "status": "Active"
        },
        {
            "empid": "EMP1005",
            "username": "Anthony S. Hernandez",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 4",
            "status": "Inactive"
        },
        {
            "empid": "EMP1006",
            "username": "Calvin E. Cuevas",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 2",
            "status": "Active"
        },
        {
            "empid": "EMP1007",
            "username": "Jimmy A. McGuire",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 3",
            "status": "Active"
        },
        {
            "empid": "EMP1008",
            "username": "Thomas M. Gadson",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 2",
            "status": "Inactive"
        },
        {
            "empid": "EMP1009",
            "username": "Fred S. Cousins",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 4",
            "status": "Active"
        },
        {
            "empid": "EMP10010",
            "username": "Russell A. Pearson",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 2",
            "status": "Inactive"
        },
        {
            "empid": "EMP1011",
            "username": "Fred S. Cousins",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 1",
            "status": "Active"
        },
        {
            "empid": "EMP1012",
            "username": "Thomas M. Gadson",
            "permissions": "Admin",
            "tags": "VIP",
            "department": "Department 2",
            "status": "Inactive"
        },
        {
            "empid": "EMP1013",
            "username": "Jimmy A. McGuire",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 3",
            "status": "Active"
        },
        {
            "empid": "EMP1014",
            "username": "Calvin E. Cuevas",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 1",
            "status": "Active"
        },
        {
            "empid": "EMP1015",
            "username": "Anthony S. Hernandez",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 4",
            "status": "Inactive"
        },
        {
            "empid": "EMP1016",
            "username": "Roy D. Barron",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 2",
            "status": "Active"
        },
        {
            "empid": "EMP1017",
            "username": "Jimmy A. McGuire",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 3",
            "status": "Active"
        },
        {
            "empid": "EMP1018",
            "username": "Tyler C. Rodriguez",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 2",
            "status": "Inactive"
        },
        {
            "empid": "EMP1019",
            "username": "Donald M. Dillard",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 4",
            "status": "Active"
        },
        {
            "empid": "EMP10020",
            "username": "Richard E. Skalski",
            "permissions": "User",
            "tags": "VIP",
            "department": "Department 2",
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
        permission: '--Select Permission--',
        tag: '--Select Tags--',
        department: '--Select Department--'
    }

    const [filter, setFilter] = useState(initialFilterValues);

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    }

    const handleFilterSave = () => {
        if (filter.permission === '--Select Permission--') {
            toast.error('Please select a permission', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (filter.tag === '--Select Tags--') {
            toast.error('Please select a tag', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (filter.department === '--Select Department--') {
            toast.error('Please select a department', {
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
    };

    const initialValues = {
        vendoremail: '',
        username: '',
        permission: 'User',
        tags: '--Select Tags--',
        department: '--Select Department--'
    };
    const [userDetails, setUserDetails] = useState(initialValues);
    const [active, setActive] = useState("Inactive");

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    }

    const handleActiveChange = () => {
        setActive((prevActive) => (prevActive === 'Active' ? 'Inactive' : 'Active'));
    };

    const handleUserSave = () => {
        if (!userDetails.vendoremail) {
            toast.error('Please enter a employee id', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (!userDetails.username) {
            toast.error('Please enter a username', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (userDetails.tags === '--Select Tags--') {
            toast.error('Please select a tag', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else if (userDetails.department === '--Select Department--') {
            toast.error('Please select a department', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        else {
            console.log("Edited:", userDetails);
            console.log("Active:", active);
            toast.success('User Created Successfully', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
            setUserDetails(initialValues);
            onClose();
        }
    }


    return (
        <div>
            <Text fontSize="35px" fontWeight="600" >Protected Users</Text>
            <Card overflow='auto' height='600px'>
                <Tabs >
                    <TabList>
                        <Tab _focus={{ boxShadow: "none" }}>User Database</Tab>
                        <Tab _focus={{ boxShadow: "none" }}>Analysis Reports</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
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
                                                <FormControl>
                                                    <FormLabel>Permission</FormLabel>
                                                    <Select color={textColor} name='permission' id='permission' onChange={handleFilterChange} sx={{ option: { color: textColor } }} >
                                                        <option>--Select Permission--</option>
                                                        <option>Admin</option>
                                                        <option >User</option>
                                                    </Select>
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Tags</FormLabel>
                                                    <Select color={textColor} name='tag' id='tag' onChange={handleFilterChange} sx={{ option: { color: textColor } }} >
                                                        <option >--Select Tags--</option>
                                                        <option >VIP</option>

                                                    </Select>
                                                    {/* <Input type='text' placeholder='Sender' /> */}
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Department</FormLabel>
                                                    <Select color={textColor} name='department' id='department' onChange={handleFilterChange} sx={{ option: { color: textColor } }}>
                                                        <option>--Select Department--</option>
                                                        <option>Department 1</option>
                                                        <option>Department 2</option>
                                                        <option>Department 3</option>
                                                        <option>Department 4</option>
                                                    </Select>
                                                </FormControl>
                                                {/* <FormControl>
                                                <FormLabel>Subject</FormLabel>
                                                <Input type='text' placeholder='subject' color={textColor} name='subject' id='subject' onChange={handleFilterChange} />
                                            </FormControl>
                                            <FormControl>
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
                                                <Flex>
                                                    <Button
                                                        // me='100%'
                                                        // mb='50px'

                                                        // minW='140px'
                                                        // mt={{ base: "30px", "2xl": "auto" }}
                                                        variant='brand'
                                                        fontWeight='500'
                                                        w='80px'
                                                        onClick={handleFilterSave}
                                                        mr={2}
                                                    >
                                                        APPLY
                                                    </Button>
                                                    <Button onClick={handleCancel}
                                                        backgroundColor='red.500' color='white' w='80px'
                                                        fontWeight='500'
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
                                <Button borderRadius={0} onClick={onOpen}>
                                    <Icon as={MdAdd} color={textColor} fontSize='25px' />
                                    <Text color={textColor} fontSize='20px' >Add</Text>
                                </Button>
                            </Flex>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader padding='0rem 11rem' borderBottom={`1px solid ${modalHeaderColor}`} mt={3}>Add User</ModalHeader>
                                    <ModalCloseButton onClick={() => { setUserDetails(initialValues) }} />
                                    <Flex marginLeft='auto' paddingRight='25px'>
                                        <Text color='Red'>*&nbsp;</Text>
                                        <Text fontSize='13px'> = Required Information</Text>
                                    </Flex>
                                    <ModalBody>
                                        <FormControl isRequired >
                                            <FormLabel>Employee Id</FormLabel>
                                            <Input placeholder='Enter employee id' color={textColor} value={userDetails.vendoremail} id='vendoremail' name='vendoremail' onChange={handleChange} />
                                        </FormControl>
                                        <FormControl mt={4} isRequired >
                                            <FormLabel>Username</FormLabel>
                                            <Input placeholder='Enter username' color={textColor} value={userDetails.username} id='username' name='username' onChange={handleChange} />
                                        </FormControl>
                                        <FormControl mt={4} isRequired >
                                            <FormLabel>Permission</FormLabel>
                                            <Select color={textColor} value={userDetails.permission} name='permission' id='permission' onChange={handleChange} sx={{ option: { color: textColor } }} >
                                                <option >--Select Permission--</option>
                                                <option >Admin</option>
                                                <option >User</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl mt={4} isRequired >
                                            <FormLabel>Tags</FormLabel>
                                            <Select color={textColor} value={userDetails.tags} name='tags' id='tags' onChange={handleChange} sx={{ option: { color: textColor } }} >
                                                <option >--Select Tags--</option>
                                                <option >VIP</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl mt={4} isRequired>
                                            <FormLabel>Department</FormLabel>
                                            <Select color={textColor} value={userDetails.department} name='department' id='department' onChange={handleChange} sx={{ option: { color: textColor } }} >
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
                                            <Button mr={3} onClick={() => { onClose(); setUserDetails(initialValues); setActive('Inactive') }} borderRadius={4} fontWeight='500' backgroundColor='red.500' color='white'
                                                sx={{
                                                    _hover: {
                                                        backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                                        color: 'white',           // Keeps the text color unchanged on hover
                                                    }

                                                }} >
                                                CANCEL
                                            </Button>
                                            <Button onClick={handleUserSave} borderRadius={4} variant='brand'
                                                fontWeight='500'
                                                w='100px'>SAVE</Button>
                                        </Flex>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                            <ProtectedUsersTable columns={columns} data={data} />
                        </TabPanel>
                        <TabPanel>
                            <Card
                                direction='column'
                                w='100%'
                                h="470px"
                                px='0px'
                                overflowX={{ sm: "scroll", lg: "auto" }}
                            >
                                <Text fontSize='26px' fontWeight='700' >Individual User Risk Scores</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <UserRiskScoreBar />
                                    <UserRiskProfile />
                                </SimpleGrid>
                                <Text fontSize='26px' fontWeight='700' >User Clicks on Phishing Links</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <UserClicksPhishingLinksBar />
                                    <UserClicksPhishingLinksPie />
                                </SimpleGrid>
                                <Text fontSize='26px' fontWeight='700' >Reported Phishing Attempts</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <ReportedPhishingAttemptsLine />
                                    <ReportedPhishingAttemptsBar />
                                </SimpleGrid>

                                <Text fontSize='26px' fontWeight='700' >User Training Completion Rates</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <UserTrainingRatesDonut />
                                </SimpleGrid>
                            </Card>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </div >
    )
}

export default ProtectedUsersTabs