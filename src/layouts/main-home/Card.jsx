import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, name, des }) => {
  return (
    <Link to={"/product/2#"}>
      <Box
        width={{ lg: 300, md: 250, sm: 200, base: 150 }}
        boxShadow={"0px 0px 10px #ddd"}
        height={{lg : 350, md : 350, sm : 300, base : 200}}
        borderRadius={20}
      >
        <Image
          src={image}
          width={"100%"}
          height={{ lg: 250, md: 250, sm: 200, base: 100 }}
          objectFit={"cover"}
          borderTopRadius={20}
        />
        <Box p={3}>
          <Text
            fontSize={{ lg: 20, md: 20, sm: 15, base: 15 }}
            fontWeight={600}
          >
            {name}
          </Text>
          <Flex justifyContent={'space-between'} pb={4} fontSize={{lg : 15, md : 15, sm : 12, base : 10}} pt={2}>
            <Text fontWeight={500}>Price</Text>
            <Text>₦ 4800</Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
