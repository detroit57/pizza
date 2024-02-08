import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex
      justifyContent={"center"}
      h={"100vh"}
      pt={"200px"}
      bg={"linear-gradient(45deg,skyblue,white)"}
    >
      <Box>
        <Heading
          fontFamily={"Clash"}
          color={"#1a202c"}
          fontSize={100}
          textAlign={"center"}
        >
          Made by Mimis🥤
          <br />
          🍕Loved by all
        </Heading>
        <Flex justifyContent={"center"} marginTop={"30px"}>
          <Button
            p={"30px"}
            borderRadius={20}
            bg={"#1a202c"}
            _hover={"none"}
            color={"#fff"}
          >
            Explore Categories
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Hero;
