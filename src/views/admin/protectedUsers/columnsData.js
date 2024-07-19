import { Badge, Box, Link, Text } from "@chakra-ui/react";
import EdtiUser from "./EdtiUser";

export const columnsDataProtectedUsers = [
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

]