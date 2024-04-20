import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box as={Link} to={"/home"}>
      <Image
        src="/logo.jpg"
        borderRadius={100}
        width={{ lg: "70px", md: "60px", sm: "50px", base: "50px" }}
      />
    </Box>
  );
};

export default Logo;
