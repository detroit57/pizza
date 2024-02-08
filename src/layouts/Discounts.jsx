import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Social from "../components/Social";
import PercentageCard from "../components/PercentageCard";

const Discounts = () => {
  return (
    <Flex py={10} justifyContent={"center"}>
      <Box>
        <Heading textAlign={"center"} fontSize={60}>
          Get 20% discounts <br /> on Your First Purchase
        </Heading>
        <PercentageCard />
        <Box>
          <Heading textAlign={"center"} fontSize={60} py={5}>
            Follow Us On
          </Heading>
          <Grid gridTemplateColumns={"1fr 1fr 1fr"} py={5}>
            <Social />
            <Social />
            <Social />
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};

export default Discounts;
