import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Social from "../components/Social";
import PercentageCard from "../components/PercentageCard";

const Discounts = () => {
  return (
    <Flex py={10} justifyContent={"center"}>
      <Box>
        <Heading
          textAlign={"center"}
          fontSize={{ lg: 60, md: 50, sm: "30px", base: "20px" }}
        >
          Get 20% discounts <br /> on Your First Purchase
        </Heading>
        <PercentageCard />
        <Box>
          <Heading
            textAlign={"center"}
            fontSize={{ lg: 60, md: 50, sm: 40, base: 40 }}
            py={5}
          >
            Follow Us On
          </Heading>
          <Flex
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={5}
          >
            <Social />
            <Social />
            <Social />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Discounts;
