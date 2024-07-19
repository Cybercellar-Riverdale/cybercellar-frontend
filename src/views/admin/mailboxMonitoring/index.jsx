// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MailboxMonitoringTabs from "./MailboxMonitoringTabs";
// import { columnsDataIncidentTable } from "./columnsData";
// import tableData from "./tableData.json";
import { ToastContainer } from "react-toastify";


export default function MailboxMonitoring() {
    // Chakra Color Mode
    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 1 }}
                spacing={{ base: "20px", xl: "20px" }}>
                <MailboxMonitoringTabs />
            </SimpleGrid>
            <ToastContainer />
        </Box>
    );
}