import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const PercentageCard = () => {
  return (
    <Box py={10}>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
      >
        <Image
          src="/img (1).jpeg"
          borderRadius={20}
          width={{lg : "400px", md : "300px", sm : "200px", base : "200px"}}
        />
        <Box borderLeft={"2px solid #ddd"} pl={10}>
          <Text fontSize={{lg : 40, md : 40, sm : "30px",base : "30px"}} fontWeight={600}>
            Price After 20% <br />
            Discount
          </Text>
          <Flex fontSize={"30px"} gap={50}>
            <Text textDecoration={"line-through"} color={"#ddd"}>
              &#8358;10000
            </Text>
            <Text>&#8358;8000</Text>
          </Flex>
          <Button
            p={7}
            width={"100%"}
            my={4}
            bg={"#1a202c"}
            color={"#fff"}
            _hover={"none"}
          >
            Start Shopping
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default PercentageCard;
