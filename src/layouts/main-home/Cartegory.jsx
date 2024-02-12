import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Cartegory = () => {
  return (
    <Box
      width={{ lg: 250, md: 250, sm: 250, base: 150 }}
      boxShadow={"0px 0px 10px #ddd"}
      borderRadius={20}
    >
      <Image
        src="https://img.freepik.com/premium-photo/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-24837.jpg?w=826"
        borderRadius={20}
      />
      <Text textAlign={"center"} py={2} fontSize={20}>
        Rice Foods
      </Text>
    </Box>
  );
};

export default Cartegory;
