import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const CheckoutItem = () => {
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap={5} alignItems={"center"}>
          <Image
            src="https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?w=740&t=st=1707226705~exp=1707227305~hmac=92a01fb150906bcf5e1311aa084fe592d2bc47b2d3016dcaab214bce3ff2082c"
            width={"60px"}
            objectFit={"cover"}
            height={"60px"}
          />
          <Box>
            <Text>Mimi's Pizza</Text>
            <Flex gap={5}>
              <Text>₦4000</Text>
              <Text>(5)</Text>
            </Flex>
          </Box>
        </Flex>
        <CloseButton />
      </Flex>
    </Box>
  );
};

export default CheckoutItem;
