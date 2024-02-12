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
          src="https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?w=740&t=st=1707226705~exp=1707227305~hmac=92a01fb150906bcf5e1311aa084fe592d2bc47b2d3016dcaab214bce3ff2082c"
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
