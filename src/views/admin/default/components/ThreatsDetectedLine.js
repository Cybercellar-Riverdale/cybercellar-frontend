// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
// import {
//   lineChartDataThreatDetectedLine,
//   lineChartOptionsThreatDetected,
// } from "variables/charts";

export default function ThreatsDetectedLine(props) {
  const { ...rest } = props;

  const lineChartDataThreatDetectedLine = [
    {
      name: "Number of Threats Detected",
      data: [2, 5, 3, 2, 4, 6, 8, 10, 5, 7, 3, 6],
    },
    // {
    //   name: "Total",
    //   data: [24, 27, 26, 21, 25, 38, 27],
    // },
    // {
    //   name: "Malware",
    //   data: [5, 1, 8, 4, 2, 7, 3],
    // },
    // {
    //   name: "Phishing",
    //   data: [4, 7, 6, 3, 2, 7, 5],
    // },
    // {
    //   name: "Spam",
    //   data: [3, 8, 5, 2, 3, 4, 6],
    // },
    // {
    //   name: "Edge Protection",
    //   data: [1, 4, 2, 4, 7, 9, 2],
    // },
    // {
    //   name: "Rule Messages",
    //   data: [9, 4, 2, 6, 7, 5, 3],
    // },
  ];

  const lineChartOptionsThreatDetected = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#0D920B",
      },
    },
    colors: ["#E856B2", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
    // colors: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#0D920B",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      type: "line",
    },
    xaxis: {
      type: "numeric",
      categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
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
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      column: {
        color: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
        opacity: 0.5,
      },
    },
    color: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
  };

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          <Text
            me='auto'
            color={textColor}
            fontSize='xl'
            fontWeight='700'
            lineHeight='100%'>
            Number of Threats Detected
          </Text>
          {/* <Button
                        ms='auto'
                        align='center'
                        justifyContent='center'
                        bg={bgButton}
                        _hover={bgHover}
                        _focus={bgFocus}
                        _active={bgFocus}
                        w='37px'
                        h='37px'
                        lineHeight='100%'
                        borderRadius='10px'
                        {...rest}>
                        <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
                    </Button> */}
        </Flex>
      </Flex>
      <Flex w='100%'>
        {/* <Flex flexDirection='column' me='20px' mt='28px'>
            <Text
              color={textColor}
              fontSize='34px'
              textAlign='start'
              fontWeight='700'
              lineHeight='100%'>
              $37.5K
            </Text>
            <Flex align='center' mb='20px'>
              <Text
                color='secondaryGray.600'
                fontSize='sm'
                fontWeight='500'
                mt='4px'
                me='12px'>
                Total Spent
              </Text>
              <Flex align='center'>
                <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />
                <Text color='green.500' fontSize='sm' fontWeight='700'>
                  +2.45%
                </Text>
              </Flex>
            </Flex>
  
            <Flex align='center'>
              <Icon as={IoCheckmarkCircle} color='green.500' me='4px' />
              <Text color='green.500' fontSize='md' fontWeight='700'>
                On track
              </Text>
            </Flex>
          </Flex> */}
        <Box minH='260px' minW='100%' mt='auto'>
          <LineChart
            chartData={lineChartDataThreatDetectedLine}
            chartOptions={lineChartOptionsThreatDetected}
          />
        </Box>
      </Flex>
    </Card>
  );
}
