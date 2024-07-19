import { Badge, Box, Link, Text } from "@chakra-ui/react";
import EmailIdModal from "./EmailIdModal";

export const columnsDataIncidentTable = [
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

]