// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChart from "components/charts/BarChart";
import React from "react";
// import {
//   barChartDataDiffDomain,
//   barChartOptionsDiffDomain,
// } from "variables/charts";
import { MdBarChart } from "react-icons/md";

export default function DiffDomainEmailBar(props) {
  const { ...rest } = props;
  const barChartDataDiffDomain = [
    {
      name: "Authenticated",
      data: [400, 370, 330, 390, 320],
    },
    {
      name: "Unauthenticated",
      data: [370, 380, 390, 390, 320],
    },
    // {
    //   name: "IT",
    //   data: [360, 370, 330, 390, 320, 390, 300, 320, 380, 200, 400, 300],
    // },
    // {
    //   name: "Marketinh",
    //   data: [320, 370, 330, 400, 200, 350, 360, 320, 330, 400, 250, 300],
    // },
    // {
    //   name: "Sales",
    //   data: [370, 380, 390, 390, 320, 380, 250, 320, 400, 350, 300, 200],
    // },
  ];

  const barChartOptionsDiffDomain = {
    chart: {
      stacked: true,
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
      categories: ["example.com", "test.com", "outlook.com", "yahoo.com", "gmail.com"],
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
        show: false,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },

    grid: {
      borderColor: "rgba(163, 174, 208, 0.3)",
      show: true,
      yaxis: {
        lines: {
          show: false,
          opacity: 0.5,
        },
      },
      row: {
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#A1C8E8", "#F3AFAA", "#00BA38", "#3B82F6"],
    },
    legend: {
      show: false,
    },
    colors: ["#A1C8E8", "#F3AFAA", "#00BA38", "#3B82F6"],
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

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
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
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "0px 18px 40px rgba(112, 144, 176, 0.12)"
  );
  return (
    <Card align='center' direction='column' w='100%' {...rest} boxShadow={cardShadow} >
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Number of Emails from Different Domains
        </Text>
        {/* <Button
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

      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataDiffDomain}
          chartOptions={barChartOptionsDiffDomain}
        />
      </Box>
    </Card>
  );
}
