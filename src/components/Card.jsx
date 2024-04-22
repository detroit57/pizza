import { Box, Button, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Card = ({image,text,des}) => {
  return (
    <Box p={5} className="card" borderRadius={20}>
      <Image
        src={image}
        w={"100%"}
        borderRadius={20}
        objectFit={"cover"}
        as={motion.img}
        whileHover={{ scale: 0.9 }}
      />
      <Box>
        <Text
          fontSize={{ lg: "25px", md: "20px", sm: 15, base: 15 }}
          textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          fontWeight={"800"}
        >
          {text}
        </Text>
        <Text
          fontSize={{ lg: 12, md: 12, sm: 10, base: 8 }}
          textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
        >
          {des}
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
