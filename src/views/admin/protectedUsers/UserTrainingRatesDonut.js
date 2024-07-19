import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import DonutChart from "components/charts/DonutChart";
// import { donutChartDataTrafficBreak, donutChartOptionsTrafficBreak } from "variables/charts";
// import { donutChartDataUserTrainingRates, donutChartOptionsUserTrainingRates } from './charts';
export default function UserTrainingRatesDonut(props) {
    const { ...rest } = props;
    const donutChartDataUserTrainingRates = [25.4, 74.6];
    const donutChartOptionsUserTrainingRates = {
        labels: ["Not Completed", "Completed"],
        colors: ["#A1F2E9", "#E0B2F0"],
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
            colors: ["#A1F2E9", "#E0B2F0"],
        },
        tooltip: {
            enabled: true,
            theme: "dark",
            y: {
                formatter: function (value) {
                    // Calculate the total sum of the series
                    // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
                    // Calculate the percentage of the current value
                    // const percentage = (value / total * 100).toFixed(2);
                    return `${value}%`;
                }
            }
        },
    };

    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const cardColor = useColorModeValue("white", "navy.700");
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "0px 18px 40px rgba(112, 144, 176, 0.12)"
    );

    return (
        <Card p='20px' align='center' w='100%' {...rest} boxShadow={cardShadow}>
            <Flex
                px={{ base: "0px", "2xl": "10px" }}
                justifyContent='space-between'
                alignItems='center'
                w='100%'
                mb='8px'>
                {/* <Text color={textColor} fontSize='xl' fontWeight='600' mt='4px'>
                    Email Traffic Breakdown
                </Text> */}
            </Flex>

            <Box w='100%' h='240px'> {/* Adjust the height as needed */}
                <DonutChart
                    chartData={donutChartDataUserTrainingRates}
                    chartOptions={donutChartOptionsUserTrainingRates}
                />
            </Box>
        </Card>
    );
}
