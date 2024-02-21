import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import DiscountBanner from "./DiscountBanner";
import AdminCard from "./AdminCard";
import TotalUsers from "./TotalUsers";
import TotalOrders from "./TotalOrders";
import OrdersSemiTable from "./OrdersSemiTable";

const DashRightSection = () => {
  return (
    <Box ml={250} pt={55}>
      <Box pt={5}>
        <Flex gap={5}>
          <AdminCard />
          <TotalUsers />
          <TotalOrders />
        </Flex>
      </Box>
      <OrdersSemiTable />
    </Box>
  );
};

export default DashRightSection;
