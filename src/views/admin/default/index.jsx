/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachEmail,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdPeople,
  MdPerson,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TrafficBreakPie from "./components/TrafficBreakPie";
import TrafficBreakBar from "./components/TrafficBreakBar";
import InOutLine from "./components/InOutLine";
import RealTimeThreatBar from "./components/RealTimeThreatBar";
import RealTimeThreatPie from "./components/RealTimeThreatPie";
import ThreatsDetectedLine from "./components/ThreatsDetectedLine";
import ThreatTypeBreakPie from "./components/ThreatTypeBreakPie";
import TrafficBreakDownDonut from "./components/TrafficBreakDownDonut";
import ThreatTrendsArea from "./components/ThreatTrendsArea";
import ThreatTrendsBar from "./components/ThreatTrendsBar";
import { ToastContainer } from "react-toastify";
// import TrafficBreakBar from "./components/TrafficBreakPie";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} >
      <Text fontSize="35px" fontWeight="600" >Dashboard</Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdPeople} color={brandColor} />
              }
            />
          }
          name='Total users account connected'
          value='2500'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachEmail} color={brandColor} />
              }
            />
          }
          name='Email Received'
          value='3259'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdPerson} color={brandColor} />
              }
            />
          }
          name="VIP accounts"
          value="39"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Vendors connected'
          value='348'
        />
      </SimpleGrid>

      {/* <Text fontSize="30px" fontWeight="600" >Email Traffic Overview</Text> */}

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <RealTimeThreatBar />
        <RealTimeThreatPie />
        {/* <TotalSpent /> */}
        {/* <DailyTraffic /> */}
        {/* <WeeklyRevenue /> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <ThreatsDetectedLine />
        <ThreatTrendsBar />
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'> */}
        {/* <DailyTraffic /> */}
        {/* <TrafficBreakPie /> */}
        {/* <TrafficBreakBar /> */}
        {/* <ThreatTrendsArea /> */}
        {/* <PieCard /> */}
        {/* </SimpleGrid> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <ThreatTypeBreakPie />
        <TrafficBreakDownDonut />
        {/* <ThreatsDetectedLine /> */}
        {/* <TotalSpent /> */}
        {/* <DailyTraffic /> */}
        {/* <WeeklyRevenue /> */}
        {/* <InOutLine /> */}
      </SimpleGrid>
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid> */}
      <ToastContainer />
    </Box>
  );
}
