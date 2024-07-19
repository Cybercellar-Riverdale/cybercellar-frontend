import { Badge, Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import EmailIdModal from "./EmailIdModal";
import EmailAnalysisPage from "../emailAnalysis/EmailAnalysisPage";
import { Link as RouterLink } from "react-router-dom";

const redirectToEmailPage = (email) => {
    return `mailto:${email}`;
};

// const textColor = useColorModeValue("secondaryGray.900", "white");

export const columnsDataIncidentTable = [
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
    },

]