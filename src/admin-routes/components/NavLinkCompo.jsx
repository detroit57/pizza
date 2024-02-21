import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const NavLinkCompo = ({ icon, name }) => {
  return (
    <Box>
      <Flex
        alignItems={"center"}
        gap={2}
        bg={"darkorange"}
        color={"#fff"}
        width={"fit-content"}
        pr={2}
        pl={2}
        my={4}
        py={2}
        borderRadius={10}
      >
        <IconButton bg={"none"} _hover={"none"} icon={icon} />
        {/* <Text fontWeight={800} fontSize={20}>
          {name}
        </Text> */}
      </Flex>
    </Box>
  );
};

export default NavLinkCompo;
