import { Box, Button, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Card = () => {
  return (
    <Box p={5} className="card" borderRadius={20}>
      <Image
        src="https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?w=740&t=st=1707226705~exp=1707227305~hmac=92a01fb150906bcf5e1311aa084fe592d2bc47b2d3016dcaab214bce3ff2082c"
        w={"100%"}
        objectFit={"cover"}
        as={motion.img}
        n
        whileHover={{ scale: 0.9 }}
      />
      <Box>
        <Text
          fontSize={{ lg: "25px", md: "20px", sm: 15, base: 15 }}
          textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          fontWeight={"800"}
        >
          Pepperoni Flavor
        </Text>
        <Text
          fontSize={{ lg: 12, md: 12, sm: 10, base: 8 }}
          textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
          necessitatibus laborum temporibus exercitationem
        </Text>
        <Button
          my={5}
          width={"100%"}
          py={{lg : "25px", md : "25px", sm : 15, base : 0}}
          bg={"#1a202c"}
          color={"#fff"}
          fontSize={{ lg: 12, md: 12, sm: 10, base: 10 }}
          _hover={"none"}
        >
          Buy Now!
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
