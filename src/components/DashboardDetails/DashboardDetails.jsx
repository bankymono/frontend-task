import { Box } from '@chakra-ui/react'
import React from 'react'
import DashboardDetailItem from '../DashboardDetailItem/DashboardDetailItem'

const DashboardDetails = () => {
  return (
      <Box mb='200px'>
          <DashboardDetailItem />
          <DashboardDetailItem />
          <DashboardDetailItem />
      </Box>
  )
}

export default DashboardDetails