// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
// import MailboxMonitoringTabs from "./MailboxMonitoringTabs";
// import { columnsDataProtectedUsers } from "./columnsData";
// import tableData from "./tableData.json";
import ProtectedUsersTabs from "./ProtectedUsersTabs";
import { ToastContainer } from "react-toastify";

export default function ProtectedUsers() {
    // Chakra Color Mode
    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 1 }}
                spacing={{ base: "20px", xl: "20px" }}>
                <ProtectedUsersTabs />
            </SimpleGrid>
            <ToastContainer />
        </Box>
    );
}