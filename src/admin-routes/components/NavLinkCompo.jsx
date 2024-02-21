import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const NavLinkCompo = ({ icon, name, link }) => {
  return (
    <Box as={Link} to={link}>
      <Flex
        alignItems={"center"}
        gap={2}
        width={"200px"}
        pr={2}
        pl={2}
        my={4}
        py={2}
        as={motion.div}
        whileHover={{
          x: 15,
          transition: {
            type: "tween",
            stiffness: 2000,
            duration: 0.4,
          },

          background: "darkorange",
          color: "#fff",
        }}
        borderRadius={40}
      >
        <IconButton bg={"#fff"} borderRadius={40} _hover={"none"} icon={icon} />
        <Text fontWeight={400} fontSize={20}>
          {name}
        </Text>
      </Flex>
    </Box>
  );
};

export default NavLinkCompo;
