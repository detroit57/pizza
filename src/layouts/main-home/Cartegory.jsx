import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Cartegory = ({image, text}) => {
  return (
    <Flex
      width={{ lg: 250, md: 250, sm: 200, base: 150 }}
      boxShadow={"0px 0px 10px #ddd"}
      alignItems={"center"}
      borderRadius={20}
      // flexWrap={"wrap"}
      p={{lg : 5, md : 5, sm : 3, base: 2}}
      gap={5}
    >
      <Image
        src={image}
        borderRadius={100}
        width={50}
        height={50}
        objectFit={"cover"}
      />
      <Text textAlign={"center"} py={2} fontSize={{lg : 20, md : 20, sm : 10, base : 10}}>
        {text}
      </Text>
    </Flex>
  );
};

export default Cartegory;
