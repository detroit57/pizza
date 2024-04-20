import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Box>
      <Image src="/logo.jpg" width={"50px"} borderRadius={40} />
    </Box>
  );
};

export default Logo;
