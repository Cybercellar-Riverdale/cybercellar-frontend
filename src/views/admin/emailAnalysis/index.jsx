// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import EmailAnalysisPage from "./EmailAnalysisPage";

export default function EmailAnalysis() {
    // Chakra Color Mode
    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 1 }}
                spacing={{ base: "20px", xl: "20px" }}>
                <EmailAnalysisPage />
            </SimpleGrid>
        </Box>
    );
}