import { Box, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2';
import {
    renderThumb,
    renderTrack,
    renderView,
} from "components/scrollbar/Scrollbar";
import Content from "components/sidebar/components/Content";

function SidebarBox({ routes }) {
    let sidebarBackgroundColor = useColorModeValue("white", "navy.800");
    const [width, setWidth] = useState('60px')
    const handleEnter = () => {
        console.log("Mouse Entered");
        setWidth('285px');
    }
    const handleLeave = () => {
        console.log("Mouse Leave");
        setWidth('60px');
    }
    return (
        <Box w={width} h='100vh' bg={sidebarBackgroundColor} position='fixed' onMouseEnter={handleEnter} onMouseLeave={handleLeave} zIndex='1' transition="width 0.2s ease"  >
            <Scrollbars
                autoHide
                renderTrackVertical={renderTrack}
                renderThumbVertical={renderThumb}
                renderView={renderView}>
                <Content routes={routes} sideWidth={width} />
            </Scrollbars>
        </Box>
    )
}

export default SidebarBox