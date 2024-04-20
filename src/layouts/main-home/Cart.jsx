import { Box, Text } from "@chakra-ui/react";
import { Bag, Bag2 } from "iconsax-react";
import React from "react";

const Cart = () => {
  return (
    <Box pos={"relative"}>
      <Bag2 variant="Bold" color="#620997" size={30} />
      <Text
        pos={"absolute"}
        top={-1}
        bg={"#620997"}
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
      <Text color={"#620997"}>Cart</Text>
    </Box>
  );
};

export default Cart;
