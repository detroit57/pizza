import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import Cartegory from "./Cartegory";
const Categories = () => {
  return (
    <Box py={100} id="cart">
      <Flex justifyContent={'center'}>
        <Box p={5}>
          <Text fontSize={"20px"}>Search Anything</Text>
          <Flex>
            <Input width={"100%"} type="search" fontSize={12} placeholder="Search Anything" />
          </Flex>
        </Box>
      </Flex>
      <Heading
        fontSize={{ lg: 80, md: 70, sm: 60, base: "50px" }}
        py={5}
        pb={10}
        textAlign={"center"}
      >
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
