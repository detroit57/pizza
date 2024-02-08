import { Box, IconButton, Text } from "@chakra-ui/react";
import { Facebook } from "iconsax-react";
import React from "react";

const Social = () => {
  return (
    <Box
      textAlign={"center"}
      boxShadow={"0px 0px 10px #ddd"}
      width={"fit-content"}
      p={10}
      borderRadius={10}
    >
      <IconButton
        icon={<Facebook variant="Bold" color="#2591f1" size={60} />}
        bg={"none"}
        color={"none"}
        _hover={"none"}
      />
      <Text mt={10} fontWeight={700} fontSize={"30px"}>
        456k+
      </Text>
      <Text fontWeight={700} fontSize={"20px"}>
        Followers+
      </Text>
    </Box>
  );
};

export default Social;
