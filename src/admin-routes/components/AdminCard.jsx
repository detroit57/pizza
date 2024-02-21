import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Wallet } from "iconsax-react";
import React from "react";

const AdminCard = () => {
  return (
    <Box
      bg={"#FF6868"}
      p={10}
      color={"#fff"}
      boxShadow={"0px 0px 10px #eee"}
      width={"fit-content"}
      borderRadius={20}
    >
      <Box>
        <Flex alignItems={"center"} gap={5}>
          <IconButton
            icon={<Wallet variant="Bold" color="#fff" size={40} />}
            bg={"none"}
          />
          <Text fontSize={40}>Balance</Text>
        </Flex>
        <Text fontSize={40} fontWeight={700}>
          ₦ 240,000.00
        </Text>
      </Box>
      <Box>
        <Text>View Entire List</Text>
      </Box>
    </Box>
  );
};

export default AdminCard;
