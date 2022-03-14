import { Badge, Box } from '@chakra-ui/react'
import React from 'react'

const DashboardDetailItem = () => {
  return (
      <Box display={'flex'} mt='20px'> 
          <Box display={'flex'} flexDir='column' alignItems={'center'} mr='20px'>
              <img src="/images/filter_icon.png" alt="filter" style={{marginBottom:'5px'}} />
              <img src="/images/funnel_icon.png" alt="filter" />
          </Box>

          <Box d='flex' flex={'1'} pb='40px' borderBottom={'1px solid #EFF1F4'} flexDir='row'>
              <Box mr='80px'>
                  <Box mb={'5px'} lineHeight='28px' fontWeight='600' as='h1'>Searches <Badge ml='5px' px={'4px'} bgColor={'green.400'} color='#fff' borderRadius={'40px'}>+5%</Badge></Box>
                  <Box>
                      <Box d='flex' alignItems={'center'}>
                        <Box fontSize={'20px'} mr='10px'>29 380</Box>
                        <Box fontSize={'12px'}>Yesterday</Box>
                      </Box>

                      <Box d='flex' alignItems={'center'} color='#A0B0B9'>
                        <Box fontSize={'20px'} mr='10px'>27 985</Box>
                        <Box fontSize={'12px'}>Last friday</Box>
                      </Box>
                    
                  </Box>
              </Box>

              <Box>
                  <Box fontWeight={'600'} lineHeight='28px' mb='10px'>
                      <Box>Mobile traffic: 100%</Box>
                      <Box>Web traffic: 100%</Box>
                  </Box>

                  <Box fontSize={'12px'} color='#A0B0B9' mb={'6px'}>You get 100% traffic on mobile and desktop devices.</Box>
                  <Box fontSize={'12px'}>
                      <span>Help:</span>
                      <span style={{color:'blue'}}> <a href="http://#">Searches</a> ,<a href="http://#"> Pessimisation</a></span>
                  </Box>
              </Box>
          </Box>
      </Box>
  )
}

export default DashboardDetailItem