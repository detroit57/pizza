import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Box>
      <Image
        src="/logo.png"
        width={{ lg: "70px", md: "60px", sm: "50px", base: "50px" }}
      />
    </Box>
  );
};

export default Logo;
