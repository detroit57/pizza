import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Cartegory from "./Cartegory";

const Categories = () => {
  return (
    <Box py={100} id="cart">
      <Heading fontSize={80} py={5} pb={10} textAlign={"center"}>
        Categories
      </Heading>
      <Flex gap={5} justifyContent={"center"} flexWrap={"wrap"}>
        <Cartegory />
        <Cartegory />
        <Cartegory />
        <Cartegory />
        <Cartegory />
        <Cartegory />
        <Cartegory />
        <Cartegory />
        <Cartegory />
        <Cartegory />
      </Flex>
    </Box>
  );
};

export default Categories;
