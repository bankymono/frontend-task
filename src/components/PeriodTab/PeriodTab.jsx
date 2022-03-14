import { Box } from '@chakra-ui/react'
import React from 'react'

const PeriodTab = ({activeCell}) => {
  return (
    <Box  width={'75%'} borderRadius={'4px'} d='grid' gridTemplateColumns='repeat(4,1fr)' textAlign={'center'} mb='40px'>
        <Box 
            bgColor={activeCell===1?"#2196F3": "#fff"} 
            color={activeCell===1?"#fff": "#000"} 
            border= '1px solid  #D9D9D9' 
            borderLeftRadius={'6px'}
            padding={'8px'}
            borderRight={'none'}>Last hour</Box>

        <Box 
        bgColor={activeCell===2?"#2196F3": "#fff"} 
        color={activeCell===2?"#fff": "#000"}
        border='1px solid  #D9D9D9'
        padding={'8px'}
        borderRight={'none'}>Today</Box>

        <Box 
            padding={'8px'}
            bgColor={activeCell===3?"#2196F3": "#fff"} 
            color={activeCell===3?"#fff": "#000"}
            border='1px solid  #D9D9D9'
            borderRight={'none'}>Yesterday</Box>

        <Box 
            padding={'8px'}
            bgColor={activeCell===4?"#2196F3": "#fff"} 
            color={activeCell===4?"#fff": "#000"}
            borderRightRadius={'5px'}
            
            border='1px solid  #D9D9D9'>Last 3 days</Box>
    </Box>
  )
}

export default PeriodTab