// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
// import { pieChartDataDKIMCheck, pieChartOptionsDKIMCheck } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React from "react";
// import { pieChartDataTopReceiving, pieChartOptionsTopReceiving } from './charts';

export default function TopReceivingPie(props) {
    const { ...rest } = props;
    const pieChartDataTopReceiving = [18, 46, 16, 20];

    const pieChartOptionsTopReceiving = {
        labels: ["demo.net", "test.com", "sample.org", "example.com"],
        colors: ["#F8766D", "#C77CFF", "#00BFC4", "#7CAE00"],
        chart: {
            width: "50px",
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
            colors: ["#F8AAA5", "#D1A3F5", "#A5F1F3", "#D7F390"],
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
        <Card p='20px' align='center' w='100%' {...rest} h="300px" boxShadow={cardShadow} >
            <Flex
                px={{ base: "0px", "2xl": "10px" }}
                justifyContent='space-between'
                alignItems='center'
                w='100%'
                mb='8px'>
                <Text color={textColor} fontSize='xl' fontWeight='600' mt='4px'>
                    Top Receiving Domains
                </Text>
                {/* <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select> */}
            </Flex>

            <PieChart
                h='100%'
                w='100%'
                chartData={pieChartDataTopReceiving}
                chartOptions={pieChartOptionsTopReceiving}
            />
            {/* <Card
                bg={cardColor}
                flexDirection='row'
                boxShadow={cardShadow}
                w='100%'
                p='15px'
                px='20px'
                mt='15px'
                mx='auto'>
                <Flex direction='column' py='5px'>
                    <Flex align='center'>
                        <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='4px' />
                        <Text
                            fontSize='xs'
                            color='secondaryGray.600'
                            fontWeight='700'
                            mb='5px'>
                            Your files
                        </Text>
                    </Flex>
                    <Text fontSize='lg' color={textColor} fontWeight='700'>
                        63%
                    </Text>
                </Flex>
                <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
                <Flex direction='column' py='5px' me='10px'>
                    <Flex align='center'>
                        <Box h='8px' w='8px' bg='#6AD2FF' borderRadius='50%' me='4px' />
                        <Text
                            fontSize='xs'
                            color='secondaryGray.600'
                            fontWeight='700'
                            mb='5px'>
                            System
                        </Text>
                    </Flex>
                    <Text fontSize='lg' color={textColor} fontWeight='700'>
                        25%
                    </Text>
                </Flex>
            </Card> */}
        </Card>
    );
}
