import { Box, IconButton, Text } from "@chakra-ui/react";
import { Facebook } from "iconsax-react";
import React from "react";

const Social = ({followers,icon}) => {
  return (
    <Box
      textAlign={"center"}
      boxShadow={"0px 0px 10px #ddd"}
      width={"fit-content"}
      p={{lg : 10, md : 10, sm : 10, base : 5}}
      borderRadius={10}
    >
      <IconButton
        icon={icon}
        bg={"none"}
        color={"none"}
        _hover={"none"}
      />
      <Text mt={{lg : 10, md : 10, sm: 7, base : 8}} fontWeight={700} fontSize={"30px"}>
        {followers} +
      </Text>
      <Text fontWeight={700} fontSize={"20px"}>
        Followers+
      </Text>
    </Box>
  );
};

export default Social;
