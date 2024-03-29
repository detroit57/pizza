import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <Flex
      className="blk"
      color={"#fff"}
      marginTop={100}
      p={20}
      justifyContent={"center"}
      borderTopRadius={30}
    >
      <Box>
        <Box>
          <Flex justifyContent={"center"}>
            <Image src="/logo.png" width={{lg : 40, md : 40, sm : "100px", base : "150px"}} />
          </Flex>
          <Text textAlign={"center"} fontWeight={800} fontSize={{lg : 50, md : 50, sm : 40, base : "30px"}}>
            Mimis Pizzza
          </Text>
          <Text textAlign={"center"} fontWeight={500}>
            &copy; All rights Reserved 2024 @Mimis Pizza
          </Text>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Flex>
  );
};

export default Footer;
