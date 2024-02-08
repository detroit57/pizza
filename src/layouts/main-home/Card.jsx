import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ image, name, des }) => {
  return (
    <Box width={300} boxShadow={"0px 0px 10px #ddd"} borderRadius={20}>
      <Image
        src={image}
        width={300}
        height={300}
        objectFit={"cover"}
        borderTopRadius={20}
      />
      <Box p={5}>
        <Text fontSize={20} fontWeight={600} textAlign={"center"}>
          {name}
        </Text>
        <Text fontSize={12}>{des}</Text>
        <Button
          width={"100%"}
          mt={5}
          _hover={"none"}
          color={"#fff"}
          py={6}
          bg={"linear-gradient(45deg,tomato,darkorange)"}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
