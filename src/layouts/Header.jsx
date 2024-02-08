import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      boxShadow={"0px 0px 10px 	#ddd"}
      pos={"fixed"}
      top={0}
      bg={"#fff"}
      left={0}
      right={0}
      zIndex={999}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} p={5}>
        <Logo />
        <Flex gap={10}>
          <Text>Menu</Text>
          <Text>About</Text>
          <Text>Who we are</Text>
          <Text>Events</Text>
          <Text>Contacts</Text>
          <Text>Who we are</Text>
          <Text>Drinks🥤</Text>
          <Text>Categories 🍕</Text>
        </Flex>
        <Link to={"/login"}>
          <Button
            bg={"#1a202c"}
            color={"#fff"}
            borderRadius={40}
            width={150}
            _hover={"none"}
          >
            Login
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
