import { Box, Text } from "@chakra-ui/react";
import { Bag, Bag2 } from "iconsax-react";
import React from "react";

const Cart = () => {
  return (
    <Box pos={"relative"}>
      <Bag2 variant="Bold" color="darkorange" size={30} />
      <Text
        pos={"absolute"}
        top={-1}
        bg={"darkorange"}
        border={"2px solid #fff"}
        px={1.5}
        right={-2}
        borderRadius={40}
        color={"#fff"}
        fontSize={12}
        fontWeight={600}
      >
        3
      </Text>
      <Text color={"darkorange"}>Cart</Text>
    </Box>
  );
};

export default Cart;
