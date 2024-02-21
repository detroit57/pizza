import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { ShoppingBag, User } from "iconsax-react";
import React from "react";

const TotalOrders = () => {
  return (
    <Box
      bg={"#FF9843"}
      p={10}
      color={"#fff"}
      boxShadow={"0px 0px 10px #eee"}
      width={"fit-content"}
      borderRadius={20}
    >
      <Box>
        <Flex alignItems={"center"} gap={5}>
          <IconButton
            icon={<ShoppingBag color="#fff" variant="Bold" size={40} />}
            bg={"none"}
          />
          <Text fontSize={40}>Total Orders</Text>
        </Flex>
        <Text fontSize={40} fontWeight={700}>
          64
        </Text>
      </Box>
      <Box>
        <Text>View Entire List</Text>
      </Box>
    </Box>
  );
};

export default TotalOrders;
