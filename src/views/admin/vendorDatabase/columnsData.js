import { Badge, Box, Link, Text } from "@chakra-ui/react";
import EditVendor from "./EditVendor";
import DeleteVendor from "./DeleteVendor";

export const columnsDataVendorDatabase = [
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

]