import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { User } from "iconsax-react";
import React from "react";

const TotalUsers = () => {
  return (
    <Box
      bg={"#65B741"}
      p={10}
      color={"#fff"}
      boxShadow={"0px 0px 10px #eee"}
      width={"fit-content"}
      borderRadius={20}
    >
      <Box>
        <Flex alignItems={"center"} gap={5}>
          <IconButton
            icon={<User variant="Bold" color="#fff" size={40} />}
            bg={"none"}
          />
          <Text fontSize={40}>Total Users</Text>
        </Flex>
        <Text fontSize={40} fontWeight={700}>
          400
        </Text>
      </Box>
      <Box>
        <Text>View Entire List</Text>
      </Box>
    </Box>
  );
};

export default TotalUsers;
