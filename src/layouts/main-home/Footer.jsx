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
            <Image src="/logo.png" width={40} />
          </Flex>
          <Text fontWeight={800} fontSize={50}>
            Mimis Pizzza
          </Text>
          <Text fontWeight={500}>
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
