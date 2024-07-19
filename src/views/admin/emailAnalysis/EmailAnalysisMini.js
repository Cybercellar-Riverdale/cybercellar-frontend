import { Text } from '@chakra-ui/react'
import React from 'react'

function EmailAnalysisMini({ analysisDet }) {
    return (
        <div>
            <Text>{analysisDet.email_id}</Text></div>
    )
}

export default EmailAnalysisMini