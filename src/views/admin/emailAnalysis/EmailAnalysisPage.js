import { Button, Flex, FormControl, FormLabel, Input, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Tabs, TabList, TabPanels, Tab, TabPanel, Textarea, useDisclosure, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, Divider, Select, } from '@chakra-ui/react';
import Card from 'components/card/Card';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import SPFCheckPie from '../incidentLog/SPFCheckPie';
import DKIMCheckPie from '../incidentLog/DKIMCheckPie';
import DMARCCheckPie from '../incidentLog/DMARCCheckPie';
import axios from 'axios';
import ReactJson from 'react-json-view';

let details = '';
function EmailAnalysisPage() {
    const [emailDetails, setEmailDetails] = useState('');
    const [emailDetectionReports,setEmailDetectionReports] = useState({});
    // state = {
    //     'ip_check' : {},
    //     'file_analysis' : {},
    //     ..
    // }
    const location = useLocation();

    const { isOpen, onOpen, onClose } = useDisclosure();

    // Load email details from local storage or state
    useEffect(() => {
        details = localStorage.getItem('email_id');
        details = JSON.parse(details);
        console.log("Email details", details);
        console.log("Email details", details);
        if (details) {
            setEmailDetails(details);
        } else if (location.state && location.state.emailDetails) {
            setEmailDetails(location.state.emailDetails);
        }
    }, [location.state]);

    // useEffect(async ()=>{
    //     const response = await axios.post(
    //         'https://api.sapling.ai/api/v1/edits',
    //         {
    //             "key": 'QUSJQPH4OQSWFO51YVZPLQCUJOGF6B83', // replace with your API key
    //             "session_id": 'test session',
    //             "text":'hello',
    //         },
    //     );
	// 	console.log(response)
    //     setemailDetectionReports(response)

    //     // var temp_state = {...emailDetectionReports}
    //     // temp_state['file_analysis'] = response
    //     // setemailDetectionReports(temp_state)

    //     console.log(emailDetectionReports)
    // },[])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ip_check_response = await axios.post(
                    'https://api.sapling.ai/api/v1/edits',
                    {
                        key: 'QUSJQPH4OQSWFO51YVZPLQCUJOGF6B83', // replace with your API key
                        session_id: 'test session',
                        text: 'hello',
                    },
                );
                if (ip_check_response.data) {
                    setEmailDetectionReports({
                        ip_check : ip_check_response
                    });
                } else {
                    console.error('Unexpected response structure:', ip_check_response);
                }

                const domain_analysis_response = await axios.post(
                    'https://api.sapling.ai/api/v1/sentiment',
                    {
                        key: 'QUSJQPH4OQSWFO51YVZPLQCUJOGF6B83',
                        "text":"17 warnings have detailed information that is not shown.",
                    },
                );
                if (domain_analysis_response.data) {
                    var temp_state = {...emailDetectionReports}
                    temp_state['domain_analysis'] = domain_analysis_response
                    setEmailDetectionReports(temp_state)
                } else {
                    console.error('Unexpected response structure:', domain_analysis_response);
                }

                const link_analysis_response = await axios.post(
                    'https://api.sapling.ai/api/v1/tone',
                    {
                        key: 'QUSJQPH4OQSWFO51YVZPLQCUJOGF6B83',
                        "text":"Failed to parse source map from '/mnt/s/work/Cybercellar/cybercellar-frontend/node_modules/react-bootstrap-sweetalert/src/styles/SweetAlertStyles.ts'",
                    },
                );
                if (link_analysis_response.data) {
                    var temp_state = {...emailDetectionReports}
                    temp_state['link_analysis'] = link_analysis_response
                    setEmailDetectionReports(temp_state)
                } else {
                    console.error('Unexpected response structure:', link_analysis_response);
                }

                const file_analysis_response = await axios.post(
                    'https://api.sapling.ai/api/v1/edits',
                    {
                        key: 'QUSJQPH4OQSWFO51YVZPLQCUJOGF6B83', // replace with your API key
                        session_id: 'test session',
                        text: 'WARNING in ./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js',
                    },
                );
                if (domain_analysis_response.data) {
                    var temp_state = {...emailDetectionReports}
                    temp_state['file_analysis'] = file_analysis_response
                    setEmailDetectionReports(temp_state)
                } else {
                    console.error('Unexpected response structure:', file_analysis_response);
                }

            } catch (err) {
                console.error('API call error:', err.message);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log('Updated emailDetectionReports state:', emailDetectionReports);
    }, [emailDetectionReports]);

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderTopColor = useColorModeValue("black", "white");
    const buttonBgColor = useColorModeValue("blackAlpha.100", "blackAlpha.300");

    const data = React.useMemo(() => [
        {
            "attack_score": emailDetails.attack_score || '',
            "attackType": emailDetails.attackType || '',
            "attactTags": "", // Placeholder for other data you might want to display
        }
    ], [emailDetails]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Attack Score',
                accessor: 'attack_score'
            },
            {
                Header: 'Attack Type',
                accessor: 'attackType'
            },
            {
                Header: 'Attack Tags',
                accessor: 'attactTags'
            },
        ], []);

    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "0px 18px 40px rgba(112, 144, 176, 0.12)"
    );
    const tableInstance = useTable(
        {
            columns,
            data,
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
    } = tableInstance;
    initialState.pageSize = 5;

    return (
        // <div>Hello{emailId.email_id}</div>
        <Card>
            {/* <h1>Email Analysis</h1>
            {emailDetails && (
                <div>
                    <p>Email ID: {emailDetails.emailId}</p>
                    <p>Email: {emailDetails.email}</p>
                    <p>Sender: {emailDetails.sender}</p>
                    <p>Subject: {emailDetails.subject}</p>
                    <p>Recipients: {emailDetails.recipients}</p>
                    <p>Attack Type: {emailDetails.attackType}</p>
                    <p>Impersonated Party: {emailDetails.impParty}</p>
                    <p>attack Score: {emailDetails.attack_score}</p>
                </div>
            )} */}
            <Flex align='center' justify='flex-end'>
                <Button onClick={onOpen} borderRadius={5} backgroundColor={buttonBgColor} >Remediation</Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent maxW='-webkit-fit-content'>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt={4}>
                        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
                            <Button backgroundColor='blue.300' color='white' borderRadius={5}
                                sx={{
                                    _hover: {
                                        backgroundColor: 'blue.400', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }
                                }}
                            >Quarantine</Button>
                            <Button backgroundColor='green.300' color='white' borderRadius={5}
                                sx={{
                                    _hover: {
                                        backgroundColor: 'green.500', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }
                                }}>Deletion</Button>
                            <Button backgroundColor='red.300' color='white' borderRadius={5}
                                sx={{
                                    _hover: {
                                        backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }
                                }}>Blocklist</Button>
                        </SimpleGrid>
                        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
                            <Button backgroundColor='orange.200' color='white' borderRadius={5}
                                sx={{
                                    _hover: {
                                        backgroundColor: 'orange.500', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }
                                }}>Rollback</Button>
                            <Button backgroundColor='pink.300' color='white' borderRadius={5}
                                sx={{
                                    _hover: {
                                        backgroundColor: 'pink.500', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }
                                }}>Password Reset</Button>
                            <Button backgroundColor='purple.300' color='white' borderRadius={5}
                                sx={{
                                    _hover: {
                                        backgroundColor: 'purple.500', // Keeps the background color unchanged on hover
                                        color: 'white',           // Keeps the text color unchanged on hover
                                    }
                                }}>Account Lockdown</Button>
                        </SimpleGrid>
                    </ModalBody>
                    <ModalFooter margin='auto'>
                        <Button onClick={onClose} backgroundColor='red.500' color='white' w='80px'
                            fontWeight='500' borderRadius={5}
                            sx={{
                                _hover: {
                                    backgroundColor: 'red.500', // Keeps the background color unchanged on hover
                                    color: 'white',           // Keeps the text color unchanged on hover
                                }
                            }}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Text fontSize='24px' fontWeight='700'>Verdict</Text>
            <Card boxShadow={cardShadow}>
                <Table {...getTableProps()} variant='striped' colorScheme="ucValuation" mb='24px'>
                    <Thead>
                        {headerGroups.map((headerGroup, index) => (
                            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                {headerGroup.headers.map((column, index) => (
                                    <Th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        pe='10px'
                                        key={index}
                                        borderColor={borderColor}>
                                        <Flex
                                            justify='space-between'
                                            align='center'
                                            fontSize={{ sm: "10px", lg: "12px" }}
                                            color='gray.400'>
                                            {column.render("Header")}
                                        </Flex>
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()} fontWeight='500'>
                        {rows.map((row, index) => {
                            prepareRow(row);
                            return (
                                <Tr {...row.getRowProps()} key={index}>
                                    {row.cells.map((cell, index) => {

                                        return (
                                            <Td
                                                {...cell.getCellProps()}
                                                fontSize={{ sm: "14px" }}
                                                minW={{ sm: "150px", md: "200px", lg: "auto" }}
                                                borderColor='transparent'>
                                                {cell.render('Cell')}

                                            </Td>
                                        );
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </Card>
            <Card boxShadow={cardShadow} mt={2}>
                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
                    <div>
                        <Text
                            color='black'
                            style={{
                                background: "#d1d1d2",
                                textAlign: "center",
                                borderRadius: "5px",
                                marginBottom: "20px",
                            }}
                        >
                            Sender Info
                        </Text>
                        <FormControl isReadOnly>
                            <Flex align='center'>
                                <FormLabel w='152px'>Name :</FormLabel>
                                <Input value={emailDetails.campaign_recipient} color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4} >
                            <Flex align='center'>
                                <FormLabel w='152px'>Email :</FormLabel>
                                <Input value={emailDetails.email} color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4}>
                            <Flex align='center'>
                                <FormLabel w='152px'>Domain :</FormLabel>
                                <Input color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4}>
                            <Flex align='center'>
                                <FormLabel w='152px'>Geolocation :</FormLabel>
                                <Input color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4}>
                            <Flex align='center'>
                                <FormLabel w='152px'>IP :</FormLabel>
                                <Input color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4}>
                            <Flex align='center'>
                                <FormLabel w='152px'>Authentication :</FormLabel>
                                <Input color={textColor} />
                            </Flex>
                        </FormControl>
                    </div>
                    <di>
                        <Text
                            color='black'
                            style={{
                                background: "#d1d1d2",
                                textAlign: "center",
                                borderRadius: "5px",
                                marginBottom: "20px",
                            }}
                        >
                            Information Display
                        </Text>
                        <FormControl isReadOnly>
                            <Flex align='center'>
                                <FormLabel w='152px'>Subject :</FormLabel>
                                <Input value={emailDetails.subject} color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4} >
                            <Flex align='center'>
                                <FormLabel w='152px'>Message Id :</FormLabel>
                                <Input value={emailDetails.email_id} color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4}>
                            <Flex align='center'>
                                <FormLabel w='152px'>Recipient :</FormLabel>
                                <Input value={emailDetails.campaign_recipient} color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4}>
                            <Flex align='center'>
                                <FormLabel w='152px'>Sender :</FormLabel>
                                <Input value={emailDetails.from} color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4}>
                            <Flex align='center'>
                                <FormLabel w='152px'>Return Path :</FormLabel>
                                <Input color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl isReadOnly mt={4}>
                            <Flex align='center'>
                                <FormLabel w='152px'>Date :</FormLabel>
                                <Input value={emailDetails.receivedDate} color={textColor} />
                            </Flex>
                        </FormControl>
                    </di>
                </SimpleGrid>
            </Card>
            <Text fontSize='24px' fontWeight='700' mt={2}>Detection Report</Text>
            <Card boxShadow={cardShadow} >
                <Tabs >
                    <TabList>
                        <Tab>Header Analysis</Tab>
                        <Tab>IP Check</Tab>
                        <Tab>Domain Analysis</Tab>
                        <Tab>Link Analysis</Tab>
                        <Tab>File Analysis</Tab>
                        <Tab>QR Code Analysis</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb='20px'>
                                <SPFCheckPie />
                                <DKIMCheckPie />
                            </SimpleGrid>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb='5px'>
                                <DMARCCheckPie />
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <Textarea
                                value={JSON.stringify(emailDetectionReports['ip_check'], null, 2)}
                                readOnly
                                width="100%"
                                height="400px"
                                fontFamily="monospace"
                                bgColor="gray.100"
                                color="black"
                                p={4}
                            />
                        </TabPanel>
                        <TabPanel>
                        <Textarea
                                value={JSON.stringify(emailDetectionReports['domain_analysis'], null, 2)}
                                readOnly
                                width="100%"
                                height="400px"
                                fontFamily="monospace"
                                bgColor="gray.100"
                                color="black"
                                p={4}
                            />
                        </TabPanel>
                        <TabPanel>
                        <Textarea
                                value={JSON.stringify(emailDetectionReports['link_analysis'], null, 2)}
                                readOnly
                                width="100%"
                                height="400px"
                                fontFamily="monospace"
                                bgColor="gray.100"
                                color="black"
                                p={4}
                            />
                        </TabPanel>
                        <TabPanel>
                        <Textarea
                                value={JSON.stringify(emailDetectionReports['file_analysis'], null, 2)}
                                readOnly
                                width="100%"
                                height="400px"
                                fontFamily="monospace"
                                bgColor="gray.100"
                                color="black"
                                p={4}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
            <Text fontSize='24px' fontWeight='700' mt={2} style={{display:'none'}}>Content Analysis</Text>
            <Card boxShadow={cardShadow} style={{display:'none'}}>
                <Flex align='center' justify='space-between'>
                    <Card width='70%'>
                        <FormControl>
                            <Flex align='center'>
                                <FormLabel width='100px'>From:</FormLabel>
                                <Input value={emailDetails.email} type='text' color={textColor} isReadOnly />
                            </Flex>
                        </FormControl>
                        <FormControl mt={2}>
                            <Flex align='center'>
                                <FormLabel width='100px'>To:</FormLabel>
                                <Input value={emailDetails.campReciepEmail} type='text' color={textColor} isReadOnly />
                            </Flex>
                        </FormControl>
                        <FormControl mt={2}>
                            <Flex align='center'>
                                <FormLabel width='100px'>Subject:</FormLabel>
                                <Input value={emailDetails.subject} type='text' color={textColor} />
                            </Flex>
                        </FormControl>
                        <FormControl mt={2}>
                            <Flex align='center'>
                                <FormLabel width='100px'></FormLabel>
                                <Textarea placeholder='Message Body...' rows={6} color={textColor} />
                            </Flex>
                        </FormControl>
                        {/* <Divider mt={2} /> */}
                        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mt='5px' borderTop={`1px solid ${borderTopColor}`}>
                            <FormControl>
                                <FormLabel>Language Score</FormLabel>
                                <Input value='8' color={textColor} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Sentiment</FormLabel>
                                <Select color={textColor} sx={{ option: { color: textColor } }}>
                                    <option>Positive</option>
                                    <option>Negative</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Tone</FormLabel>
                                <Select color={textColor} sx={{ option: { color: textColor } }}>
                                    <option>Excitement</option>
                                    <option>Joy</option>
                                    <option>Anger</option>
                                    <option>Fear</option>
                                    <option>Surprise</option>
                                    <option>Disgust</option>
                                    <option>Anticipation</option>
                                    <option>Trust</option>
                                    <option>None</option>
                                </Select>
                            </FormControl>
                        </SimpleGrid>
                    </Card>
                    <Card ml={2} width='30%'>
                        <Text textAlign='center' fontSize='18px' fontWeight='700'>Campaign Activities</Text>
                        <FormControl mt={4} isReadOnly>
                            <FormLabel>Received Emails</FormLabel>
                            <Input color={textColor} />
                        </FormControl>
                        <FormControl mt={4} isReadOnly>
                            <FormLabel>Opened by User</FormLabel>
                            <Input color={textColor} />
                        </FormControl>
                        <FormControl mt={4} isReadOnly>
                            <FormLabel>Forwarded by User</FormLabel>
                            <Input color={textColor} />
                        </FormControl>
                        <FormControl mt={4} isReadOnly>
                            <FormLabel>Replied by User</FormLabel>
                            <Input color={textColor} />
                        </FormControl>
                    </Card>
                </Flex>
            </Card >
        </Card >
    );
}

export default EmailAnalysisPage;
