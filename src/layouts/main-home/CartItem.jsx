import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const CartItem = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} my={5}>
      <Image
        width={50}
        height={50}
        borderRadius={10}
        objectFit={"cover"}
        src="https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34705.jpg?w=826&t=st=1707748691~exp=1707749291~hmac=70967801bf66002a45a77ce70649057111426ab1a6eeebc8d5c39aa194b00fb1"
      />
      <Box>
        <Text fontWeight={"bold"}>Jollof Rice and Chicken</Text>
        <Flex justifyContent={"space-between"} alignItems={'center'}>
          <Text>Price</Text>
          <Flex fontSize={12} gap={5}>
            <Text color={"#ddd"} textDecor={"line-through"}>₦ 4800</Text>
            <Text>₦ 2000</Text>
          </Flex>
        </Flex>
      </Box>
      <CloseButton />
    </Flex>
  );
};

export default CartItem;
