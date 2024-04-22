import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const CartItem = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} my={5}>
      <Flex gap={{ lg: 10, md: 10, sm: 5, base: 5 }} alignItems={"center"}>
        <Image
          width={{ xl: 100, lg: 100, md: 100, sm: "70px", base: 50 }}
          height={{ xl: 100, lg: 100, md: 100, sm: "70px", base: 50 }}
          borderRadius={10}
          objectFit={"cover"}
          src="/logo.jpg"
        />
        <Box>
          <Text fontWeight={"bold"} fontSize={{ lg: "30px", md: "30px" }}>
            Jollof Rice and Chicken
          </Text>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{ lg: 0, md: 0, sm: 5, base: 5 }}
            fontSize={{ lg: "20px", md: "30px", sm: 20, base: 15 }}
          >
            <Text>Price</Text>
            <Flex
              gap={5}
              fontSize={{ lg: "20px", md: "30px", sm: 20, base: 12 }}
            >
              <Text color={"#ddd"} textDecor={"line-through"}>
                ₦ 4800
              </Text>
              <Text>₦ 2000</Text>
              <Text>(5)</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <CloseButton />
    </Flex>
  );
};

export default CartItem;
