// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
import { HSeparator } from "components/separator/Separator";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import React, { useState } from "react";

// FUNCTIONS

function SidebarContent(props) {
  const { routes, sideWidth } = props;
  const [late, setLate] = useState(false);
  setTimeout(() => {
    if (sideWidth === '285px') {
      setLate(true);
    }
    else {
      setLate(false);
    }
  }, 100)
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
      {sideWidth === '285px' && late ?
        <Brand /> : (<><Box h='90px' w='175px' my='2px'></Box><HSeparator mb='10px' /></>)}
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} sideWidth={sideWidth} />
        </Box>
      </Stack>

      <Box
        ps='20px'
        pe={{ md: "16px", "2xl": "0px" }}
        mt='60px'
        mb='40px'
        borderRadius='30px'>
        <SidebarCard />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
