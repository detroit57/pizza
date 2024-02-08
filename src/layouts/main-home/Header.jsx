import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
const Header = () => {
  return (
    <Box
      p={5}
      pos={"fixed"}
      backdropFilter={"blur(24px)"}
      className="col"
      borderRadius={100}
      zIndex={9999}
      right={5}
      top={5}
      left={5}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Logo />
        <Search />
        <Flex alignItems={"center"} gap={5}>
          <Cart />
          <Avatar />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
