import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import DonutChart from "components/charts/DonutChart";
// import { donutChartDataTrafficBreak, donutChartOptionsTrafficBreak } from "variables/charts";

export default function TrafficBreakDownDonut(props) {
    const { ...rest } = props;

    const donutChartDataTrafficBreak = [10, 18, 31, 41, 50];
    const donutChartOptionsTrafficBreak = {
        labels: ["Spam", "Malware", "Phishing", "Legitimate", "Suspicious"],
        colors: ["#10B981", "#F59E0B", "#F43F5E", "#8B5CF6", "#3B82F6"],
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    labels: {
                        show: false
                    }
                }
            }
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        hover: { mode: null },
        plotOptions: {
            donut: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: false,
                    },
                },
            },
        },
        fill: {
            colors: ["#10B981", "#F59E0B", "#F43F5E", "#8B5CF6", "#3B82F6"],
        },
        tooltip: {
            enabled: true,
            theme: "dark",
            // y: {
            //   formatter: function (value) {
            //     const total = chartData.reduce((acc, val) => acc + val, 0);
            //     const percentage = (value / total * 100).toFixed(2);
            //     return `${percentage}%`;
            //   }
            // }
        },
    };

    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const cardColor = useColorModeValue("white", "navy.700");
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "unset"
    );

    return (
        <Card p='20px' align='center' w='100%' {...rest} boxShadow={cardShadow}>
            <Flex
                px={{ base: "0px", "2xl": "10px" }}
                justifyContent='space-between'
                alignItems='center'
                w='100%'
                mb='8px'>
                <Text color={textColor} fontSize='xl' fontWeight='600' mt='4px'>
                    Email Traffic Breakdown
                </Text>
            </Flex>

            <Box w='100%' h='240px'> {/* Adjust the height as needed */}
                <DonutChart
                    chartData={donutChartDataTrafficBreak}
                    chartOptions={donutChartOptionsTrafficBreak}
                />
            </Box>
        </Card>
    );
}
