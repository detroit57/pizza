import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import DashRightSection from "./components/DashRightSection";

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <LeftSideBar />
      <DashRightSection />
    </Box>
  );
};

export default Dashboard;
