import React from "react";

// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";

// Custom components
import Card from "components/card/Card.js";
import {
    barChartDataBlockedEmails,
    barChartOptionsBlockedEmails,
} from "variables/charts";

// import { barChartDataTopSending, barChartOptionsTopSending } from './charts'

// Assets
import { RiArrowUpSFill } from "react-icons/ri";

export default function TopSendingBar(props) {
    const { ...rest } = props;
    const barChartDataTopSending = [{
        name: "Number of Emails",
        data: [350, 230, 180, 80],
    },
    ];

    const barChartOptionsTopSending = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            style: {
                fontSize: "12px",
                fontFamily: undefined,
            },
            onDatasetHover: {
                style: {
                    fontSize: "12px",
                    fontFamily: undefined,
                },
            },
            theme: "dark",
        },
        xaxis: {
            categories: ["example.com", "example.org", "example.ne", "example.edu"],
            show: false,
            labels: {
                show: true,
                style: {
                    colors: "#A3AED0",
                    fontSize: "14px",
                    fontWeight: "500",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            color: "black",
            labels: {
                show: true,
                style: {
                    colors: "#CBD5E0",
                    fontSize: "14px",
                },
            },
        },
        grid: {
            show: false,
            strokeDashArray: 5,
            yaxis: {
                lines: {
                    show: true,
                },
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "#F0A356",
                            opacity: 1,
                        },
                        {
                            offset: 100,
                            color: "#F0A356",
                            opacity: 0.28,
                        },
                    ],
                ],
            },
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                columnWidth: "40px",
            },
        },
    };
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "0px 18px 40px rgba(112, 144, 176, 0.12)"
    );
    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    return (
        <Card align='center' direction='column' w='100%' {...rest} boxShadow={cardShadow}>
            <Flex justify='space-between' align='start' px='10px' pt='5px'>
                <Text
                    me='auto'
                    color={textColor}
                    fontSize='xl'
                    fontWeight='700'
                    lineHeight='100%'>
                    Top Sending Domains
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
                    chartData={barChartDataTopSending}
                    chartOptions={barChartOptionsTopSending}
                />
            </Box>
        </Card>
    );
}
