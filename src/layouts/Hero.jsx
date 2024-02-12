import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex
      justifyContent={"center"}
      h={{lg  :"100vh", md : "100vh", sm : "80vh", base : "80vh"}}
      p={{lg : 20, md : 20, sm : 10,base: 10}}
      pt={{base : "180px", sm : "160px", md: "180px", lg : "160px"}}
      bg={"linear-gradient(45deg,skyblue,white)"}
    >
      <Box>
        <Heading
          fontFamily={"Clash"}
          color={"#1a202c"}
          fontSize={{lg: 100, md : 70, sm : 40, base : "30px"}}
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
