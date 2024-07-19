import React from "react";

// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";

// Custom components
import Card from "components/card/Card.js";
import {
    barChartDataThreatsFromDomain,
    barChartOptionsThreatsFromDomain,
} from "variables/charts";

// Assets
import { RiArrowUpSFill } from "react-icons/ri";

export default function ThreatsFromDomainBar(props) {
    const { ...rest } = props;
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "0px 18px 40px rgba(112, 144, 176, 0.12)"
    );
    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    return (
        <Card align='center' direction='column' w='100%' {...rest} boxShadow={cardShadow} >
            <Flex justify='space-between' align='start' px='10px' pt='5px'>
                <Text
                    me='auto'
                    color={textColor}
                    fontSize='xl'
                    fontWeight='700'
                    lineHeight='100%'>
                    Number of Threats from different Domains
                </Text>
                {/* <Flex align='center'>
                    <Icon as={RiArrowUpSFill} color='green.500' />
                    <Text color='green.500' fontSize='sm' fontWeight='700'>
                        +2.45%
                    </Text>
                </Flex> */}
            </Flex>
            <Box h='240px' mt='auto'>
                <BarChart
                    chartData={barChartDataThreatsFromDomain}
                    chartOptions={barChartOptionsThreatsFromDomain}
                />
            </Box>
        </Card>
    );
}
