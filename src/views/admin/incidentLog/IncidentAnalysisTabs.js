import Card from 'components/card/Card'
import React, { useMemo } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Table, Thead, Tr, Th, Flex, Tbody, Text, Icon, Td, SimpleGrid, Button, Select, Box, Badge, Link } from '@chakra-ui/react'
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import QuarantinedBar from './QuarantinedBar';
import QuarantinedPie from './QuarantinedPie';
import SPFCheckPie from './SPFCheckPie';
import DKIMCheckPie from './DKIMCheckPie';
import DiffDomainEmailBar from './DiffDomainEmailBar';
import DMARCCheckPie from './DMARCCheckPie';
import BlockEmailsLine from './BlockEmailsLine';
import BlockedEmailsBar from './BlockedEmailsBar';
import EmailStatusSandBoxPie from './EmailStatusSandBoxPie';
import ThreatTypesSandboxPie from './ThreatTypesSandboxPie';
import DetectedByClientBar from './DetectedByClientBar';
import ThreatsFromDomainBar from './ThreatsFromDomainBar';
import { Link as RouterLink } from "react-router-dom";

export function IncidentTable({ columns, data }) {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
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
                h="420px"
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
function IncidentAnalysisTabs() {

    const redirectToEmailPage = (email) => {
        return `mailto:${email}`;
    };

    const columns = useMemo(() => [
        {
            "Header": "MESSAGE ID",
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
            Header: "EMAIL",
            accessor: "email",
            Cell: ({ row }) => (
                <Link href={redirectToEmailPage(row.original.email)} color="blue.500">
                    {row.original.email}
                </Link>
            )
        },
        {
            Header: "SUBJECT",
            accessor: "subject",
            Cell: ({ row }) => (
                <Box display="flex" flexDirection="column">
                    <Text fontWeight="600">{row.original.subject}</Text>
                    <Badge variant='subtle' backgroundColor={row.original.attackType === 'Malware' ? "red.200" : "blue.200"} borderRadius={0} mt={1} maxW="fit-content" color='black' >
                        Attack Type: {row.original.attackType}
                    </Badge>
                </Box>
            )
        },
        {
            Header: "FROM",
            accessor: "from",
            Cell: ({ row }) => (
                <Box display="flex" flexDirection="column">
                    <Text fontWeight="600" >{row.original.from}</Text>
                    <Text fontWeight="100">{row.original.fromEmail}</Text>
                    <Badge variant='subtle' backgroundColor={row.original.impParty === 'Unknown Partner' ? "red.200" : "blue.200"} borderRadius={0} mt={1} maxW="fit-content" color='black' >
                        Impersonated Party: {row.original.impParty}
                    </Badge>
                </Box>
            )
        },
        {
            Header: "CAMPAIGN RECIPIENT",
            accessor: "campaign_recipient",
            Cell: ({ row }) => (
                <Box display="flex" flexDirection="column">
                    <Text fontWeight="600" >{row.original.campaign_recipient}</Text>
                    <Text fontWeight="100">{row.original.campReciepEmail}</Text>
                </Box>
            )
        },
        {
            Header: "RECEIVED",
            accessor: "received",
            Cell: ({ row }) => (
                <Box display="flex" flexDirection="column">
                    <Text fontWeight="600" w="100px" >{row.original.received}</Text>
                    <Text fontWeight="100" w="160px">{row.original.receivedDate}</Text>
                </Box>
            )
        },
        {
            Header: "ANALYSIS",
            accessor: "topic",
            Cell: ({ row }) => (
                <Box display="flex" flexDirection="column">
                    {row.original.topic !== '' ? (<Badge variant='subtle' backgroundColor='blue.200' borderRadius={0} mt={1} maxW="fit-content" color='black' >
                        Topic: {row.original.topic}
                    </Badge>) : null}

                    <Badge variant='subtle' backgroundColor={row.original.attack_strat === 'Unknown Sender' ? "red.200" : "blue.200"} borderRadius={0} mt={1} maxW="fit-content" color='black' >
                        Attack Strategy: {row.original.attack_strat}
                    </Badge>
                    <Badge variant='subtle' backgroundColor='blue.200' borderRadius={0} mt={1} maxW="fit-content" color='black' >
                        Attack Vector: {row.original.attack_vector}
                    </Badge>
                </Box>
            )
        },
        {
            Header: "STATUS",
            accessor: "status",
            Cell: ({ row }) => (
                <Box>
                    {row.original.status === 'auto remediated' ? (<Badge variant='subtle' backgroundColor='red.200' borderRadius={0} mt={1} maxW="fit-content" color='black' >
                        AUTO REMEDIATED
                    </Badge>) : row.original.status === 'quarantined' ? (<Badge variant='subtle' backgroundColor='blue.200' borderRadius={0} mt={1} maxW="fit-content" color='black' >
                        QUARANTINED
                    </Badge>) : (<Badge variant='subtle' backgroundColor='green.200' borderRadius={0} mt={1} maxW="fit-content" color='black' >
                        SENT
                    </Badge>)
                    }
                </Box >
            )
        }
    ], []);
    const data = useMemo(() => [
        {
            "email_id": "1001",
            "email": "tylerfinky@gmail.com",
            "subject": "You got notification from DocuSign Service",
            "from": "DocuSign Signature Service",
            "campaign_recipient": "Tyler Finkey",
            "received": "6 Months ago",
            "analysis": "Topic:Document Sharing",
            "status": "auto remediated",
            "attackType": "Malware",
            "fromEmail": "dsservicemarrt.com",
            "campReciepEmail": "TFinkey@gmail.com",
            "receivedDate": "Jan 31, 2022, 12:19pm CST",
            "attack_strat": "Name Recognition",
            "topic": "Document Sharing",
            "attack_vector": "Link(File sharing site)",
            "impParty": "Brand",
            "attack_score": 8
        },
        {
            "email_id": "1002",
            "email": "kra@gmail.com",
            "subject": "KRA_Collection_MAY 2021",
            "from": "Rejie",
            "campaign_recipient": "Kristen Thomas",
            "received": "6 Months ago",
            "analysis": "Attack Strategy:Unknown Sender",
            "status": "quarantined",
            "attackType": "Malware",
            "fromEmail": "rejiepodcast.com",
            "campReciepEmail": "KThomas@gmail.com",
            "receivedDate": "Jan 25, 2022, 7:14am CST",
            "attack_strat": "Unknown Sender",
            "topic": "",
            "attack_vector": "Attachment(with macros)",
            "impParty": "Unknown Partner",
            "attack_score": 9
        },
        {
            "email_id": "1003",
            "email": "jsmith@gmail.com",
            "subject": "March-Apric Statements of Accounts",
            "from": "John Smith",
            "campaign_recipient": "Thomas Store",
            "received": "6 Months ago",
            "analysis": "Topc:Invoice Attack Strategy:Unknown Sender",
            "status": "Sent",
            "attackType": "Malware",
            "fromEmail": "jsmith@bg-chi.net",
            "campReciepEmail": "tstore@gmail.com",
            "receivedDate": "Jan 20, 2022, 1:04am CST",
            "attack_strat": "Unknown Sender",
            "topic": "Invoice",
            "attack_vector": "Attachment(compressed)",
            "impParty": "Unknown Partner",
            "attack_score": 7
        },
        {
            "email_id": "1004",
            "email": "canadarecievingdept@gmail.com",
            "subject": "Important info from Canada Recieving Departments",
            "from": "Enterprise Via Canada-Recieving Department",
            "campaign_recipient": "3 Recipients",
            "received": "6 Months ago",
            "analysis": "Attack Strategy:Name Recognition",
            "status": "auto remediated",
            "attackType": "Malware",
            "fromEmail": "canadarecieving@department.com",
            "campReciepEmail": "",
            "receivedDate": "Jan 15, 2022, 11:37am CST",
            "attack_strat": "Name Recognition",
            "topic": "",
            "attack_vector": "Link",
            "impParty": "Automated System (Inferral)",
            "attack_score": 8
        },
        {
            "email_id": "1005",
            "email": "canadarecievingdept@gmail.com",
            "subject": "Important info from Canada Recieving Departments",
            "from": "Enterprise Via Canada-Recieving Department",
            "campaign_recipient": "3 Recipients",
            "received": "6 Months ago",
            "analysis": "Attack Strategy:Name Recognition",
            "status": "quarantined",
            "attackType": "Malware",
            "fromEmail": "canadarecieving@department.com",
            "campReciepEmail": "",
            "receivedDate": "Jan 11, 2022, 2:04pm CST",
            "attack_strat": "Unknown Sender",
            "topic": "",
            "attack_vector": "Link",
            "impParty": "NOne/Other",
            "attack_score": 7
        },
        {
            "email_id": "1006",
            "email": "canadarecievingdept@gmail.com",
            "subject": "Important info from Canada Recieving Departments",
            "from": "Enterprise Via Canada-Recieving Department",
            "campaign_recipient": "3 Recipients",
            "received": "6 Months ago",
            "analysis": "Attack Strategy:Name Recognition",
            "status": "auto remediated",
            "attackType": "Phishing Credentials",
            "fromEmail": "canadarecieving@department.com",
            "campReciepEmail": "",
            "receivedDate": "Jan 07, 2022, 08:52am CST",
            "attack_strat": "Spoofed Email",
            "topic": "",
            "attack_vector": "Link",
            "impParty": "Automated System (Inferral)",
            "attack_score": 8
        },
        {
            "email_id": "1007",
            "email": "canadarecievingdept@gmail.com",
            "subject": "Important info from Canada Recieving Departments",
            "from": "Enterprise Via Canada-Recieving Department",
            "campaign_recipient": "3 Recipients",
            "received": "6 Months ago",
            "status": "quarantined",
            "attackType": "Phishing Credentials",
            "fromEmail": "canadarecieving@department.com",
            "campReciepEmail": "",
            "receivedDate": "Jan 01, 2022, 6:33am CST",
            "attack_strat": "Name Recognition",
            "topic": "",
            "attack_vector": "Link",
            "impParty": "Automated System (Inferral)",
            "attack_score": 9
        }
    ], []);

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    return (
        <div>
            <Text fontSize="35px" fontWeight="600" >Incident Log</Text>

            <Card overflow='auto' height='600px'>
                <Tabs >
                    <TabList>
                        <Tab _focus={{ boxShadow: "none" }}>Incidents</Tab>
                        <Tab _focus={{ boxShadow: "none" }}>Analysis Reports</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <IncidentTable columns={columns} data={data} />
                        </TabPanel>
                        <TabPanel>
                            <Card
                                direction='column'
                                w='100%'
                                h="480px"
                                px='0px'
                                overflowX={{ sm: "scroll", lg: "auto" }}
                            >
                                <Text fontSize='26px' fontWeight='700'  >Quarantined Emails</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <QuarantinedBar />
                                    <QuarantinedPie />
                                </SimpleGrid>
                                <Text fontSize='26px' fontWeight='700'>Email Authentication Analysis</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <SPFCheckPie />
                                    {/* <QuarantinedBar /> */}
                                    <DKIMCheckPie />
                                    {/* <QuarantinedPie /> */}
                                </SimpleGrid>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <DMARCCheckPie />
                                    <DiffDomainEmailBar />
                                </SimpleGrid>
                                <Text fontSize='26px' fontWeight='700'>Blocked Emails</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <BlockEmailsLine />
                                    <BlockedEmailsBar />
                                </SimpleGrid>
                                <Text fontSize='26px' fontWeight='700'>Sandboxing Results</Text>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <EmailStatusSandBoxPie />
                                    <ThreatTypesSandboxPie />
                                </SimpleGrid>
                                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                                    <DetectedByClientBar />
                                    <ThreatsFromDomainBar />
                                </SimpleGrid>
                            </Card>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </div>
    )
}

export default IncidentAnalysisTabs