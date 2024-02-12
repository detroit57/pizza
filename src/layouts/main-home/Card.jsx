import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ image, name, des }) => {
  return (
    <Box
      width={{ lg: 300, md: 250, sm: 250, base: 170 }}
      boxShadow={"0px 0px 10px #ddd"}
      borderRadius={20}
    >
      <Image
        src={image}
        width={"100%"}
        height={{ lg: 300, md: 250, sm: 200, base: 200 }}
        objectFit={"cover"}
        borderTopRadius={20}
      />
      <Box p={5}>
        <Text
          fontSize={{ lg: 20, md: 20, sm: 15, base: 15 }}
          fontWeight={600}
          textAlign={"center"}
        >
          {name}
        </Text>
        <Text
          fontSize={{ lg: 12, md: 12, sm: 10, base: 8 }}
          textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
        >
          {des}
        </Text>
        <Button
          width={"100%"}
          mt={{ lg: 5, md: 5, sm: 3, base: 2 }}
          _hover={"none"}
          color={"#fff"}
          py={{ lg: 6 }}
          height={{ lg: 15, md: 15, sm: 10, base: 8 }}
          fontSize={{ lg: 15, md: 12, sm: 12, base: 10 }}
          bg={"linear-gradient(45deg,tomato,darkorange)"}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
