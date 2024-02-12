import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
const Header = () => {
  return (
    <Box
      p={{ lg: 5, md: 4, sm: 3, base: 3 }}
      pos={"fixed"}
      backdropFilter={"blur(24px)"}
      className="col"
      zIndex={9999}
      right={0}
      top={0}
      left={0}
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
