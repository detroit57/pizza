import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './components/Header'
import LeftSideBar from './components/LeftSideBar'

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <LeftSideBar />
    </Box>
  )
}

export default Dashboard