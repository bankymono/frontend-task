import { Box, Circle, Square, Text } from '@chakra-ui/react'
import React from 'react'

const SummaryBoard = ({errors,zeroes,timeouts,errors_code_listings}) => {
  return (
      <Box>
          <Box display={'flex'} justifyContent={'space-between'} mb='15px'>
              <Box display='flex' >
                  <Circle mt='8px' mr='8px' bg='#8BC34A' width='10px' height='10px' />
                  <Box>
                      <Box fontWeight={'600'}>Errors: <span>{errors.toFixed(2)}%</span> </Box>
                      <Box color='#A0B0B9' fontSize={'12px'}>Average: <span>0,11%</span> </Box>
                  </Box>
              </Box>
              <Box display='flex' >
                  <Circle mt='8px' mr='8px' bg='#8BC34A' width='10px' height='10px' />
                  <Box>
                      <Box fontWeight={'600'}>Zeroes: <span>{zeroes.toFixed(2)}%</span> </Box>
                      <Box color='#A0B0B9' fontSize={'12px'}>Average: <span>0,11%</span> </Box>
                  </Box>
              </Box>
              <Box display='flex' >
                  <Circle mt='8px' mr='8px' bg='#8BC34A' width='10px' height='10px' />
                  <Box>
                      <Box fontWeight={'600'}>Timeouts: <span>{timeouts.toFixed(2)}%</span> </Box>
                      <Box color='#A0B0B9' fontSize={'12px'}>Average: <span>0,11%</span> </Box>
                  </Box>
              </Box>
          </Box>

          <Box display={'flex'} mb='20px'>
              <Square borderRight={'1px solid #fff'} w='40%' height='8px' bg='#FFCC00'></Square>
              <Square borderRight={'1px solid #fff'} w='30%' height='8px' bg='#5856D5'></Square>
              <Square borderRight={'1px solid #fff'} w='20%' height='8px' bg='#2196F3'></Square>
              <Square w='10%' height='8px' bg='#A0B0B9'></Square>
          </Box>

          <Box d='flex' justifyContent={'space-between'} fontSize={'12px'} w='80%' mb='40px'>
              <Box d='flex' alignItems={'center'}>
                  <Square bg='#ffcc00' w='10px' height='10px' mr='5px' />
                  <Box fontWeight={'600'}>Error 500: <span>1 256</span></Box>
              </Box>

              <Box d='flex' alignItems={'center'}>
                  <Square bg='#5856D5' w='10px' height='10px' mr='5px' />
                  <Box fontWeight={'600'}>Error 500: <span>1 256</span></Box>
              </Box>

              <Box d='flex' alignItems={'center'}>
                  <Square bg='#2196F3' w='10px' height='10px' mr='5px' />
                  <Box fontWeight={'600'}>Error 500: <span>1 256</span></Box>
              </Box>

              <Box d='flex' alignItems={'center'}>
                  <Square bg='#A0B0B9' w='10px' height='10px' mr='5px' />
                  <Box fontWeight={'600'}>Error 500: <span>1 256</span></Box>
              </Box>
          </Box>
      </Box>
  )
}

export default SummaryBoard