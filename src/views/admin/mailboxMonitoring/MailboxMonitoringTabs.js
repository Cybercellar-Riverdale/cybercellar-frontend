import Card from 'components/card/Card'
import React, { useEffect, useMemo, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorMode, useColorModeValue, Table, Thead, Tr, Th, Flex, Tbody, Text, Icon, Td, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, FormControl, FormLabel, Input, Select, Button, } from '@chakra-ui/react'
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import EmailProcessedLine from './EmailProcessedLine';
import EmailProcessedBar from './EmailProcessedBar';
import TrafficBreakDonut from './TrafficBreakDonut';
import TrafficBreakBar from './TrafficBreakBar';
import TopSendingBar from './TopSendingBar';
import TopReceivingBar from './TopReceivingBar';
import TopSendingPie from './TopSendingPie';
import TopReceivingPie from './TopReceivingPie';
import InOutBoundLine from './InOutBoundLine';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function MailboxMonitoringTable({ columns, data }) {
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

    const { colorMode } = useColorMode();

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const optionColor = useColorModeValue('gray.800', 'gray.200');
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const accBgColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.400');
    const selectStyles = {
        color: textColor,
        bg: useColorModeValue('white', 'gray.700'),
        // borderColor: borderColor,
    };
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

function MailboxMonitoringTabs() {
    // const { columnsData, tableData } = props;

    const columns = useMemo(() => [
        {
            Header: "MESSAGE ID",
            accessor: "email_id",
            Cell: ({ row }) => {
                const handleSet = () => {
                    localStorage.setItem("email_id", JSON.stringify(row.original));
                    window.location.href = `#/admin/emailanalysis/${row.original.email_id}`
                }
                return (
                    <Text onClick={handleSet} cursor='pointer'>{row.original.email_id}</Text>
                )
            }
        },
        {
            Header: "SENDER",
            accessor: "sender",
        },
        {
            Header: "RECIPIENTS",
            accessor: "recipients",
        },
        {
            Header: "SUBJECT",
            accessor: "subject",
            Cell: ({ row }) => (
                <Text>External Partner - {row.original.subject}</Text>
            ),
        },
        {
            Header: "DATE",
            accessor: "date",
        },
        {
            Header: "FINAL ACTION",
            accessor: "final_action",
        },
        // {
        //     Header: "ANALYSIS",
        //     accessor: "topic",
        // },
        // {
        //     Header: "STATUS",
        //     accessor: "status",

        // },

    ], []);
    const data = useMemo(() => [
        {
            "email_id": "1001",
            "date": "2017-05-25",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1002",
            "date": "2017-05-25",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Quarantined",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1003",
            "date": "2017-05-25",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Sent",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1014",
            "date": "2017-05-12",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Quarantined",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1004",
            "date": "2017-05-12",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Sent",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1005",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1006",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Quarantined",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1007",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1008",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Sent",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1009",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1010",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1011",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Quarantined",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1012",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Sent",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1013",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1001",
            "date": "2017-05-25",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1002",
            "date": "2017-05-25",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Quarantined",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1003",
            "date": "2017-05-25",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Sent",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1014",
            "date": "2017-05-12",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Quarantined",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1004",
            "date": "2017-05-12",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Sent",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1005",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1006",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Quarantined",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1007",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1008",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Sent",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1009",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1010",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1011",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Quarantined",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1012",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Sent",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        },
        {
            "email_id": "1013",
            "date": "2017-05-10",
            "sender": "esteele@training.pro",
            "recipients": "cwarren@training.proofpoint.com",
            "subject": "Eric Steele and Associates",
            "final_action": "Continued",
            "attack_score": 8,
            "attackType": "Malware",
            "campaign_recipient": "Tyler Finkey",
            "email": "tylerfinky@gmail.com",
            "from": "DocuSign Signature Service",
            "receivedDate": "2017-05-25"
        }
    ], []);

    const { colorMode } = useColorMode();

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const optionColor = useColorModeValue('gray.800', 'gray.200');
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const accBgColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.400');
    const selectStyles = {
        color: textColor,
        bg: useColorModeValue('white', 'gray.700'),
        // borderColor: borderColor,
    };
    const calendarIconColor = useColorModeValue(1, 0); // Light mode: invert (dark icon), Dark mode: no invert (light icon)

    const initialValues = {
        sender: '',
        timeDuration: '--Select Time Duration--',
        startDate: '',
        endDate: '',
        actionTaken: '--Select Action Taken--',
        recipient: '',
        subject: '',
    }

    const [filter, setFilter] = useState(initialValues);

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    }

    const handleSave = () => {
        if (!filter.sender) {
            toast.error('Please enter sender', {
                position: toast.POSITION.TOP_CENTER,
                theme: colorMode,
            }
            );
        }
        console.log("Save clicked");
        console.log("Entered Data:", filter);
    }

    const [expandedIndex, setExpandedIndex] = useState(null); // Manage expanded index state

    const handleCancel = () => {
        setExpandedIndex(null); // Set to null to close the Accordion
    };

    useEffect(() => {
        const inputs = document.querySelectorAll('input[type="date"]');
        inputs.forEach(input => {
            if (colorMode === 'light') {
                input.classList.add('calendar-icon-light-mode');
                input.classList.remove('calendar-icon-dark-mode');
            } else {
                input.classList.add('calendar-icon-dark-mode');
                input.classList.remove('calendar-icon-light-mode');
            }
        });
    }, [colorMode]);
    return (
        <div>
            <Text fontSize="35px" fontWeight="600" >Mailbox Monitoring</Text>

            <Card overflow='auto' height='600px'>
                <Tabs >
                    <TabList>
                        <Tab _focus={{ boxShadow: "none" }}>Mail Search</Tab>
                        <Tab _focus={{ boxShadow: "none" }}>Analysis Reports</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Accordion allowToggle index={expandedIndex} onChange={setExpandedIndex} backgroundColor={accBgColor} >
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
                                                <FormLabel>Sender</FormLabel>
                                                <Input type='text' placeholder='Sender' color={textColor} name='sender' id='sender' onChange={handleFilterChange} />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Time Duration</FormLabel>
                                                <Select color={textColor} name='timeDuration' id='timeDuration' onChange={handleFilterChange} sx={{ option: { color: textColor } }} >
                                                    <option style={{ color: optionColor }}>--Select Time Duration--</option>
                                                    <option>24 Hours</option>
                                                    <option >72 hours</option>
                                                    <option >1 Week</option>
                                                    <option >1 Month</option>
                                                    <option >Custom Date</option>
                                                </Select>
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Action Taken</FormLabel>
                                                <Select color={textColor} name='actionTaken' id='actionTaken' onChange={handleFilterChange} sx={{ option: { color: textColor } }} >
                                                    <option >--Select Action Taken--</option>
                                                    <option >Quarantined</option>
                                                    <option >Sent</option>
                                                </Select>
                                                {/* <Input type='text' placeholder='Sender' /> */}
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Recipient</FormLabel>
                                                <Input type='text' placeholder='Recipient' color={textColor} name='recipient' id='recipient' onChange={handleFilterChange} />
                                            </FormControl>
                                            <FormControl>
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
                                                        <Input type='date' placeholder='Recipient' color={textColor} name='startDate' id='startDate' onChange={handleFilterChange} className="date-input" />
                                                    </FormControl>
                                                    <FormControl>
                                                        <FormLabel>To</FormLabel>
                                                        <Input type='date' placeholder='Recipient' color={textColor} name='endDate' id='endDate' onChange={handleFilterChange} className="date-input" />
                                                    </FormControl>
                                                </>
                                            ) : null}
                                            <Flex align='center' justify='start' mt='auto'>
                                                <Button
                                                    // me='100%'
                                                    // mb='50px'
                                                    w='80px'
                                                    // minW='100px'
                                                    // mt={{ base: "30px", "2xl": "auto" }}
                                                    variant='brand'
                                                    fontWeight='500'
                                                    onClick={handleSave}
                                                    mr={3}
                                                >
                                                    APPLY
                                                </Button>
                                                <Button w='80px'
                                                    backgroundColor='red.500'
                                                    color='white'
                                                    sx={{
                                                        _hover: {
                                                            backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                                            color: 'white',           // Keeps the text color unchanged on hover

                                                        }
                                                    }}
                                                    fontWeight='500' onClick={handleCancel}>CANCEL</Button>
                                            </Flex>
                                        </SimpleGrid>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <MailboxMonitoringTable columns={columns} data={data} />
                        </TabPanel>
                        <TabPanel>
                            <Card
                                direction='column'
                                w='100%'
                                h="470px"
                                px='0px'
                                overflowX={{ sm: "scroll", lg: "auto" }}
                            >
                                <Text fontSize='26px' fontWeight='700' >Total Email Processed</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <EmailProcessedLine />
                                    <EmailProcessedBar />
                                </SimpleGrid>
                                <Text fontSize='26px' fontWeight='700' >Email Traffic Breakdown</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <TrafficBreakDonut />
                                    <TrafficBreakBar />
                                </SimpleGrid>
                                <Text fontSize='26px' fontWeight='700' >Top Sending and Receiving Domains</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <TopSendingBar />
                                    <TopReceivingBar />
                                </SimpleGrid>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <TopSendingPie />
                                    <TopReceivingPie />
                                </SimpleGrid>
                                <Text fontSize='26px' fontWeight='700' >Inbound vs Outbound Traffic</Text>
                                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                                    <InOutBoundLine />
                                </SimpleGrid>
                            </Card>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </div>
    )
}

export default MailboxMonitoringTabs