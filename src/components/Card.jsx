import { Box, Button, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Card = () => {
  return (
    <Box p={5} className="card" borderRadius={20}>
      <Image
        src="https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?w=740&t=st=1707226705~exp=1707227305~hmac=92a01fb150906bcf5e1311aa084fe592d2bc47b2d3016dcaab214bce3ff2082c"
        w={"300px"}
        as={motion.img}n
        whileHover={{ scale: 0.9 }}
      />
      <Box>
        <Text fontSize={"25px"} fontWeight={"800"}>
          Pepperoni Flavor
        </Text>
        <Text fontSize={12}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
          necessitatibus laborum temporibus exercitationem
        </Text>
        <Button
          my={5}
          width={"100%"}
          py={"25px"}
          bg={"#1a202c"}
          color={"#fff"}
          _hover={"none"}
        >
          Buy Now!
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
